//
//  ViewModel.swift
//  seminar1
//
//  Created by 한상현 on 2022/09/13.
//

// ReactorKit
// Rips
// MVVM

struct CellViewModel {
    let word: String
    let num: Int
}

class ViewModel {
    var pairDataSource: [CellViewModel] = [
        CellViewModel(word: "A", num: 1),
        CellViewModel(word: "B", num: 2),
        CellViewModel(word: "C", num: 3),
        CellViewModel(word: "D", num: 4),
        CellViewModel(word: "E", num: 5)
    ]
}
