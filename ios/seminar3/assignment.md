20.5-rookies Seminar 3 Assignment
================================

### **due: 2022.10.24(월) 23:59**

## 과제 목적
- RxSwift의 기본적인 용법 공부
- Data Binding의 구현 (UICollectionView, MVVM)
- OpenAPI 사용
- CocoaPods 이용한 오픈소스 사용
- 로컬 데이터의 적절한 활용 및 Domain 레이어를 이용한 전역적 앱 데이터 관리

## 과제 - 영화 목록 앱 만들기

[예시](https://user-images.githubusercontent.com/48316900/139861374-fd6425b1-bf87-4239-a27b-aa76f8807360.mp4)
1. Movie 탭
1) 헤더의 형태로 타이틀과 정렬 타입 선택이 가능한 버튼 존재 -> CollectionView의 헤더를 만드셔도 되고, 그냥 CollectionView 위에 버튼을 두셔도 무방
1-1) 정렬 타입은 인기 / 최고 평점 으로 두 가지 -> 각각 API 콜을 하셔야 할 것임 (GET popular, GET top_rated)
2) CollectionView는 2열로 구성되어 있으며, API 기준 1페이지에 해당하는 영화의 정보가 화면에 표시됨 (포스터 + 제목 + 평점)
3) 스크롤을 가장 아래까지 내리면 다음 페이지 데이터를 불러오는 API를 호출하여 데이터를 추가로 로드하고, CollectionView를 갱신함 -> **Pagination에 대해 검색해보세요**
4) 영화를 선택하면 NavigationController의 push로 세부 정보 뷰가 뜸 (포스터 + 제목 + 평점 + overview + 우상단 별 버튼)
5) 별 버튼이 활성화되면 해당 영화가 Favorite 영화로 로컬에 저장되어야 하고, 반대로 비활성화되면 해당 영화가 로컬에서 삭제됨.

2. Favorite 탭
1) API 요청 없이 구현되어야 합니다 : UserDefault에 저장된 값을 이용하여 구현
2) 로컬에 저장되어 있던 Favorite 영화들을 앱 시작시 불러와 Movie 탭과 같은 디자인으로 노출하면 됨
3) 영화를 선택하면 NavigationController의 push로 세부 정보 뷰가 뜸 (포스터 + 제목 + 평점 + overview)
4) 별 버튼이 활성화되면 해당 영화가 Favorite 영화로 로컬에 저장되어야 하고, 반대로 비활성화되면 해당 영화가 로컬에서 삭제됨.

## 제출 방식
1. `seminar-3-assignment` 브랜치에서 과제를 진행해 주세요. 

2. 과제 제출 시, main 브랜치로 pull request를 생성해 주세요.

3. 마감 시점의 pull request 를 기준으로 세미나장들이 직접 확인하고 피드백을 드릴 것입니다.

## 참고 자료
- MovieDBs API 링크 : https://developers.themoviedb.org/3
- UICollectionView 공식 문서 : https://developer.apple.com/documentation/uikit/uicollectionview
- RxDataSources 사용법 4가지 / 공식 문서 : https://eunjin3786.tistory.com/29 / https://github.com/RxSwiftCommunity/RxDataSources
- CocoaPods 공식 문서 : https://cocoapods.org/
- RxMarbles 예시 프로젝트 / 다이어그램 사이트 : https://github.com/RxSwiftCommunity/RxMarbles/tree/master/RxMarbles / https://rxmarbles.com/


