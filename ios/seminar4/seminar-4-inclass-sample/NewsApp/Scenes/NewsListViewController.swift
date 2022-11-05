//
//  ViewController.swift
//  NewsApp
//
//  Created by 이선재 on 2022/09/24.
//

import UIKit
import RxSwift
import RxCocoa

class NewsListViewController: UIViewController {
    private let viewModel: NewsViewModel
    
    private let tableView = UITableView()
    private let searchBar = UISearchBar()
    
    private var disposeBag = DisposeBag()
    
    init(viewModel: NewsViewModel) {
        self.viewModel = viewModel
        super.init(nibName: nil, bundle: nil)
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        setupLayout()
        applyDesign()
        
        bindTableView()
    }
    
    private func bindTableView() {
        tableView.register(NewsTableViewCell.self, forCellReuseIdentifier: "NewsTableViewCell")
        
        tableView.rx.setDelegate(self)
        tableView.rx.setPrefetchDataSource(self)
        
        self.viewModel.newsDataSource
            .bind(to: self.tableView.rx.items(cellIdentifier: "NewsTableViewCell", cellType: NewsTableViewCell.self)) { index, newsData, cell in
                cell.configure(newsData)
            }.disposed(by: self.disposeBag)
    }

    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
        self.tableView.reloadData()
    }

}

extension NewsListViewController {
    private func setupNavigationBar() {
        self.navigationItem.titleView = self.searchBar
        searchBar.delegate = self
        let searchBarButton = UIBarButtonItem(barButtonSystemItem: .search, target: self, action: #selector(didTapSearchButton))
        self.navigationItem.rightBarButtonItem = searchBarButton
    }
    
    private func setupLayout() {
        setupNavigationBar()
        
        // Configure tableView
        self.view.addSubview(tableView)
        tableView.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            tableView.topAnchor.constraint(equalTo: self.view.safeAreaLayoutGuide.topAnchor),
            tableView.bottomAnchor.constraint(equalTo: self.view.safeAreaLayoutGuide.bottomAnchor),
            tableView.leadingAnchor.constraint(equalTo: self.view.safeAreaLayoutGuide.leadingAnchor),
            tableView.trailingAnchor.constraint(equalTo: self.view.safeAreaLayoutGuide.trailingAnchor)
        ])
    }

    private func applyDesign() {
        self.view.backgroundColor = .white
        
        // SearchBar
        self.searchBar.setImage(UIImage(), for: .search, state: .normal)
        self.searchBar.placeholder = "헤드라인을 검색해보세요"
    }
    
    @objc func didTapSearchButton() {
        guard let searchText = self.searchBar.searchTextField.text else { return }
        
        self.viewModel.requestArticles(searchText: searchText)
    }
}

extension NewsListViewController: UISearchBarDelegate {
    func searchBarSearchButtonClicked(_ searchBar: UISearchBar) {
        guard let searchText = self.searchBar.searchTextField.text else { return }
        
        self.viewModel.requestArticles(searchText: searchText)
    }
}

extension NewsListViewController: UITableViewDelegate {
    func tableView(_ tableView: UITableView, heightForRowAt indexPath: IndexPath) -> CGFloat {
        return UITableView.automaticDimension
    }
    
    func tableView(_ tableView: UITableView, estimatedHeightForRowAt indexPath: IndexPath) -> CGFloat {
        return UITableView.automaticDimension
    }
}





