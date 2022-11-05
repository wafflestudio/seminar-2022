//
//  NewsViewModel.swift
//  NewsApp
//
//  Created by 한상현 on 2022/11/01.
//

import RxSwift

struct NewsData {
    let title: String
    let dateString: String
    
    init(news: News) {
        self.title = news.title
        
        let origDateStr = news.pubDate
        let origDateFormatter = DateFormatter()
        origDateFormatter.dateFormat = "E, dd MMM yyyy HH:mm:ss Z"
        origDateFormatter.locale = Locale(identifier: "en_US")
        let origDateObj: Date = origDateFormatter.date(from: origDateStr)!
        
        let myDateFormatter = DateFormatter()
        myDateFormatter.locale = Locale(identifier: "ko_KR")
        myDateFormatter.dateFormat = "yyyy년 MM월 dd일"
        let formattedDateStr = myDateFormatter.string(from: origDateObj)
        self.dateString = formattedDateStr
    }
}

final class NewsViewModel {
    private let usecase: NewsUsecase
    
    init(usecase: NewsUsecase) {
        self.usecase = usecase
    }
    
    var newsDataSource: Observable<[NewsData]> {
        return self.usecase.news
            .map { news in
                return news.map { NewsData(news: $0) }
            }
    }
}

extension NewsViewModel {
    func requestArticles(searchText: String) {
        self.usecase.requestNews(query: searchText, sort: "sim")
    }
    
    func loadMore() {
        self.usecase.loadMoreNews()
    }
}
