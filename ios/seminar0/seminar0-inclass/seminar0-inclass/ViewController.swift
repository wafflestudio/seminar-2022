//
//  ViewController.swift
//  seminar0-inclass
//
//  Created by 한상현 on 2022/09/06.
//

import UIKit

class ViewController: UIViewController {

    init() {
        super.init(nibName: nil, bundle: nil)
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    override func loadView() {
        self.view = UIView()
        
        self.view.backgroundColor = .red
        
        let titleLabel = UILabel()
        titleLabel.text = "안녕하세요"
        titleLabel.font = .systemFont(ofSize: 25)
        titleLabel.textColor = UIColor.white
        
        self.view.addSubview(titleLabel)
        titleLabel.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            titleLabel.centerXAnchor.constraint(equalTo: self.view.centerXAnchor),
            titleLabel.centerYAnchor.constraint(equalTo: self.view.centerYAnchor),
        ])
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
    }

}
