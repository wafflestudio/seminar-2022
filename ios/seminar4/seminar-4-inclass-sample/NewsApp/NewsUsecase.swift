//
//  NewsUsecase.swift
//  NewsApp
//
//  Created by 한상현 on 2022/11/01.
//

import Foundation
import Alamofire
import RxCocoa
import RxSwift

final class Repository {
    func requestNews(parameters: NewsRequestModel) -> Single<[News]> {
        return Single.create { single in
            guard let url = URL(string: "https://openapi.naver.com/v1/search/news.json") else { return }
            
            let headers: HTTPHeaders = [
                "X-Naver-Client-Id": "sY6hwukTQ4wAva1M36Un",
                "X-Naver-Client-Secret": "i2XWs4t8aK"
            ]

            AF.request(url, method: .get, parameters: parameters, headers: headers)
                    .responseDecodable(of: NewsModel.self) { [weak self] response in
                        switch response.result {
                        case .success(let result):
                            single(.success(result.items))
                        case .failure(_):
                            single(.success([]))
                        }
                    }
        
            return Disposables.create()
        }
        
    }
}
final class NewsUsecase {
    struct Constants {
        static let newsRequestCount: Int = 20
    }
    
    private var start: Int = 1
    private var sort: String = ""
    private var query: String = ""
    
    private let newsSubject: BehaviorRelay<[News]> = .init(value: [])
    
    init() {
        
    }
    
    var news: Observable<[News]> {
        return self.newsSubject
            .do(onNext: { _ in
                print("DATA COMES")
            }).asObservable()
    }
    
    func requestNews(query: String, sort: String) {
        self.start = 1
        self.sort = sort
        self.query = query
        
        let parameters = NewsRequestModel(start: self.start,
                                          display: Constants.newsRequestCount,
                                          query: query,
                                          sort: self.sort)
        
        self.repository
            .request(parameters: parameters)
            .subscribe(onNext: { [weak self] in
                self?.newsSubject.accept(<#T##event: [News]##[News]#>)
            })
    }
    
    func loadMoreNews() {
        guard let url = URL(string: "https://openapi.naver.com/v1/search/news.json") else { return }

        self.start += Constants.newsRequestCount
        
        let parameters = NewsRequestModel(start: self.start,
                                          display: Constants.newsRequestCount,
                                          query: self.query,
                                          sort: self.sort)
        
        let headers: HTTPHeaders = [
            "X-Naver-Client-Id": "sY6hwukTQ4wAva1M36Un",
            "X-Naver-Client-Secret": "i2XWs4t8aK"
        ]

        AF.request(url, method: .get, parameters: parameters, headers: headers)
                .responseDecodable(of: NewsModel.self) { [weak self] response in
                    switch response.result {
                    case .success(let result):
                        var prevNews = self?.newsSubject.value ?? []
                        prevNews.append(contentsOf: result.items)
                        self?.newsSubject.accept(prevNews)
                    case .failure(let _):
                        self?.newsSubject.accept([])
                    }
                }
                .resume()
    }
}
