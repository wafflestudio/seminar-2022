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

## 체크리스트
### 공통
- [ ] 탭바에 Movie 탭, Favorite 탭 존재
- [ ] 영화 데이터는 API 요청 1회당 20개로 제한
- [ ] 영화 데이터 요청 로직 및 저장은 UIViewController에서 진행되어서는 안 됨. 이를 위한 별도의 객체 구현 필요
- [ ] 모든 CollectionView의 DataSource는 Delegate가 아닌 RxSwift를 이용하여 제공되어야 함
- [ ] CollectionView의 디자인 레이아웃은 UICollectionViewFlowLayout을 이용하여 설정되어야 함

### Movie 탭
- [ ] Movie 탭을 열면 상단에 인기 / 최고 평점이 선택 가능한 버튼 두 개 or segment control 존재
- [ ] 인기를 선택할 경우 GET popular API의 결과를 CollectionView로 노출
- [ ] 최고 평점을 선택할 경우 GET top_rated API의 결과를 CollectionView로 노출
- [ ] 인기 / 최고 평점 모두 스크롤이 최하단에 도달하는 경우 추가 데이터 로드 
- [ ] 약간의 딜레이는 있더라도 끊임없이 아래로 스크롤이 가능해야 함
- [ ] CollectionView Cell의 구성 요소 : 썸네일 사진 + 영화 제목 + 평점
- [ ] 영화제목은 셀을 넘어가서는 안 되며, 폰트를 줄여서라도 1줄로 셀 안에 넣어야 함
- [ ] 셀 사이즈는 자유. 단 CollectionView는 열 2개로 구성되어야 함
- [ ] 셀을 선택했을 때 디테일뷰로 이동
- [ ] 디테일뷰는 커다랗게 썸네일을 보여줘야 하고, 하단에 제목과 평점 노출. 우상단 관심여부 세팅 버튼 (아이콘은 자유)
- [ ] 관심여부 세팅 버튼을 탭하면 색이 칠해지면서 관심목록에 저장, 다시 누르면 색이 사라지면서 관심목록에서 제거 (이를 보여주는 것은 Favorite 탭)

### Favorite 탭
- [ ] Movie 탭에서 관심목록에 넣은 영화들을 관심목록에 추가된 순서대로 노출
- [ ] 2열 Collection View 형태로 Movie 탭과 동일하게 노출
- [ ] 셀을 선택했을 때 디테일뷰로 이동
- [ ] 셀의 형태는 Movie 탭과 동일
- [ ] 셀의 관심여부 버튼이 선택 상태로 노출되어야 함
- [ ] 버튼을 누를 경우 관심목록에서 제거되고, 또 다시 누를 경우 관심목록에 추가 (Movie 탭과 동일)
- [ ] 디테일뷰에서 다시 Favorite 탭으로 돌아왔을 때 관심목록에 변화가 있다면 반영되어야 함
- [ ] 앱 종료 후 콜드 스타트 시에도 관심목록 그대로 남아있어야 함


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

-[
