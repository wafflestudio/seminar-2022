//
//  ViewController.swift
//  seminar1
//
//  Created by 한상현 on 2022/09/13.
//

import UIKit

class TableViewCell: UITableViewCell {
    override var reuseIdentifier: String? {
        return "TableViewCell"
    }
    
    private let wordLabel = UILabel()
    private let numLabel = UILabel()
    
    override init(style: UITableViewCell.CellStyle, reuseIdentifier: String?) {
        super.init(style: .default, reuseIdentifier: "TableViewCell")
        
        self.contentView.backgroundColor = .lightGray
        self.wordLabel.textColor = .white
        self.numLabel.textColor = .white
        
        self.contentView.addSubview(wordLabel)
        wordLabel.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            wordLabel.centerYAnchor.constraint(equalTo: self.contentView.centerYAnchor),
            wordLabel.leadingAnchor.constraint(equalTo: self.contentView.leadingAnchor, constant: 20)
        ])
        
        self.contentView.addSubview(numLabel)
        numLabel.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            numLabel.centerYAnchor.constraint(equalTo: self.contentView.centerYAnchor),
            numLabel.trailingAnchor.constraint(equalTo: self.contentView.trailingAnchor, constant: -20)
        ])
    }
    
    func configure(cvm: CellViewModel) {
        self.numLabel.text = String(cvm.num)
        self.wordLabel.text = cvm.word
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
}

class ViewController: UIViewController {

    private let viewModel: ViewModel
    
    private let tableView = UITableView()
    
    init(viewModel: ViewModel) {
        self.viewModel = viewModel
        super.init(nibName: nil, bundle: nil)
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
        
        setupLayout()
        applyDesign()
    }
    
    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
        
        self.tableView.reloadData()
    }
}

extension ViewController {
    private func setupLayout() {
        self.view.addSubview(tableView)
        tableView.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            tableView.topAnchor.constraint(equalTo: self.view.safeAreaLayoutGuide.topAnchor),
            tableView.bottomAnchor.constraint(equalTo: self.view.safeAreaLayoutGuide.bottomAnchor),
            tableView.leadingAnchor.constraint(equalTo: self.view.safeAreaLayoutGuide.leadingAnchor),
            tableView.trailingAnchor.constraint(equalTo: self.view.safeAreaLayoutGuide.trailingAnchor)
        ])
        
        tableView.register(TableViewCell.self, forCellReuseIdentifier: "TableViewCell")
        tableView.delegate = self
        tableView.dataSource = self
    }
    
    private func applyDesign() {
        self.view.backgroundColor = .white
        
        tableView.backgroundColor = .darkGray
    }
}

extension ViewController: UITableViewDelegate, UITableViewDataSource {
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return viewModel.pairDataSource.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        guard let cell = tableView.dequeueReusableCell(withIdentifier: "TableViewCell", for: indexPath) as? TableViewCell else { return UITableViewCell() }
        
        cell.configure(cvm: viewModel.pairDataSource[indexPath.row])
        
        return cell
    }
}

