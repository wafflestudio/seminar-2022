//
//  NewsRequestModel.swift
//  NewsApp
//
//  Created by 이선재 on 2022/09/25.
//

import Foundation
import UIKit

struct NewsRequestModel: Codable {
    let start: Int
    let display: Int
    let query: String
    let sort: String
}

