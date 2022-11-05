//
//  HtmlStringConverter.swift
//  NewsApp
//
//  Created by 이선재 on 2022/10/01.
//

import Foundation

extension String {
    var htmlToString: String {
        guard let data = self.data(using: .utf8) else { return "" }

        do {
            return try NSAttributedString(
                data: data,
                options: [
                    .documentType: NSAttributedString.DocumentType.html,
                    .characterEncoding: String.Encoding.utf8.rawValue
                ],
                documentAttributes: nil
            ).string
        } catch {
            return ""
        }
    }
}

