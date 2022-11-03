20.5-rookies Seminar 4 Assignment
================================

### **due: 2022.11.16(수) 23:59**

## 과제 목적
- 더 좋은 코드에 대한 고민
- 리팩토링 실습
- 의존성과 구조에 대하여

## 과제 - 영화 목록 앱 리팩토링

- MVVM + Domain(Usecase) + Repository의 형태로 과제3에서 만들었던 영화앱을 리팩토링한다.
- 과제3과는 다르게 과제4는 모든 구현이 정해진 레이어에서 이루어져야 한다.

- Movie 탭 : MVVM으로 CollectionView 데이터 관리 + FavoriteMovieUsecase를 이용하여 UserDefault와 각 영화의 관심 여부 확인 및 변경 + MovieUsecase를 이용하여 API 요청 및 현재까지 요청했던 데이터 저장 및 뷰모델에 서빙
- Favorite 탭 : MVVM으로 CollectionView 관리 + FavoriteMovieUsecase를 이용하여 UserDefault와 각 영화의 관심 여부 확인 및 변경
- Repository : MovieUsecase 생성 시 주입되어 역할을 함. 네트워크 요청을 하여, Single이나 Observable로 이번에 요청한 데이터를 서빙함

## 체크리스트
### 공통
- [ ] 탭바에 Movie 탭, Favorite 탭 존재
- [ ] 영화 데이터는 API 요청 1회당 20개로 제한
- [ ] 영화 데이터 요청 로직 및 저장은 UIViewController에서 진행되어서는 안 됨. 이를 위한 별도의 객체 구현 필요 (UserDefault 포함)
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


### 리팩토링
- 추후 추가 예정 기본적으로 과제 설명에 나온 선에서 크게 벗어나지 않을 예정

## 제출 방식
1. `seminar-4-assignment` 브랜치에서 과제를 진행해 주세요. 

2. 과제 제출 시, main 브랜치로 pull request를 생성해 주세요.

3. 마감 시점의 pull request 를 기준으로 세미나장들이 직접 확인하고 피드백을 드릴 것입니다.

## 참고 자료
- 수업시간에 했던 리팩토링 코드를 참고해보세요.
- 제가 제시한 구조가 정답이 아닙니다. 하나의 방법론을 제시한 것이고, 더 나은 방법이 있다면 적용해보는 것도 나쁘지 않을 것입니다. 다만 이번 과제만 한 번 구조대로 짜보시죠.
