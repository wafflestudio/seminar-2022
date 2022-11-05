//
//  File.swift
//  NewsApp
//
//  Created by 이선재 on 2022/09/25.
//

import Foundation

struct SearchResult: Codable {
    struct BookInfo: Codable {
        let title: String
        let link: String
        let image: String
        let author: String
        let price: String
        let publisher: String
        let pubdate: String
        let isbn: String
        let description: String
    }
    let lastBuildDate: String
    let total: Int
    let start: Int
    let display: Int
    let items: [BookInfo]
}
