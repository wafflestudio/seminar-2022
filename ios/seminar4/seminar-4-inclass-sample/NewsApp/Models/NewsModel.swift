//
//  NewsResponseModel.swift
//  NewsApp
//
//  Created by 이선재 on 2022/09/25.
//

import Foundation
import Alamofire

struct NewsModel: Decodable {
    var items: [News] = []
}

struct News: Decodable {
    let title: String
    let link: String
    let description: String
    let pubDate: String
}


func request(
    from keyword: String,
    
    completionHandler: @escaping () -> Void) {
        
    }
