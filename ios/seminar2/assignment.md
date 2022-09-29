20.5-rookies Seminar 2 Assignment
================================

### **due: 2022.10.03(월) 23:59**

## 과제 목적
- 서버와의 통신을 위한 가장 기본적인 방법을 익힌다. (HTTP + Rest API)
- 가져온 데이터를 가공하여 뷰에 전달하고 이를 화면에 표현하는 과정에 익숙해진다.
- 이를 위한 방법으로 MVVM 패턴을 사용하고, 익숙해진다.

## 과제 - 네이버 뉴스 헤드라인앱
: 검색 바에 키워드를 입력하고, 검색 버튼을 누르면 뉴스 헤드라인을 볼 수 있는 앱

- 뉴스는 검색시 20개가 노출되며, 기사제목, 작성날짜가 표기되어야 함
- 기사 제목은 말줄임표(...)로 잘려서는 안 되며 특정 범위를 넘어가면 자동으로 개행이 되어 모든 내용을 표현해야함 (각 셀의 높이가 다를 수 있음)
- 제목 데이터에 알 수 없는 &apos와 같은 특수한 태그가 붙어있는 경우가 있는데, 앱에서는 어떤 방식으로든 정상적인 텍스트로 표현되어야 함 (HTML 관련이므로 이를 이용하던, 텍스트를 잘 편집하건 자유)
- 작성 날짜는 yyyy년 MM월 dd일의 형식으로 표현되어야 함 (ex: 2022년 09월 09일)

### 잘못된 예시
<img width="300" alt="home" src="https://user-images.githubusercontent.com/48316900/192134118-37fbf514-fdac-41b9-b647-2d115f32b620.png">
### 맞는 예시
<img width="300" alt="home" src="https://user-images.githubusercontent.com/48316900/192134119-34457bea-6347-47ed-88ac-9cf27077c432.png">

- 필수 : ViewController가 절대 뉴스 데이터를 가지고 있어서는 안 됨 -> ViewModel을 만들어서 서버 데이터 요청 + 저장 + ViewController에 전달하는 형태로 구현해야 함 (MVVM) -> 만족하지 않으면 돌아가도 탈락
: 참고 -> 과제1 예제 코드, 세미나2 수업 도중 작성한 코드

- 추가 기능 : Pagination -> 20개의 뉴스를 받아오고 나서 뉴스가 더 있을테니 스크롤을 끝까지 내리면 자동으로 다음 20개 또 다음 20개 화면에 보여줄 수 있도록 하는 기능

## 제출 방식
1. `seminar-2-assignment` 브랜치에서 과제를 진행해 주세요. 

2. 과제 제출 시, main 브랜치로 pull request를 생성해 주세요.

3. 마감 시점의 pull request 를 기준으로 세미나장이 직접 확인하고 피드백을 드릴 것입니다.

## 참고 자료
- 공식 문서 : https://developer.apple.com/documentation/uikit/views_and_controls/table_views
- RxDataSource (나중에 가르쳐 드릴 예정) : https://github.com/RxSwiftCommunity/RxDataSources
- Rx로 TableView 만들기 : https://eunjin3786.tistory.com/29
- TableView 개념 익히기 : https://zeddios.tistory.com/55?category=682195
- Codable 심화 : https://minsone.github.io/programming/swift-codable-and-exceptions-extension

## 검색 키워드
1. UITableView
2. UITableViewCell
3. Delegate
4. CocoaPods + Alamofire + HTTP + Header
5. Codable
6. UITableViewCell Custom Height
7. Pagination / Prefetching
8. MVVM 
9. UISearchBar (사실 UITextField + UIButton 조합을 사용해도 무방)

(사실 이걸로 모자랄게 분명하니 구글링 열심히 해보세요~ 사실 아주 기본적인 내용들이라 구글링하면 한글로도 자료 많습니다)

