20.5-rookies Seminar 0 Assignment
================================

### **due: 2022.09.12(월) 23:59**

## 과제 목적
- Swift, Xcode, iOS 기본 UI 객체에 익숙해진다.
- view간 Routing과 auto layout을 이해한다.

## 과제 - 심플한 로그인 뷰 만들기

1. 홈 화면
- textfield를 통해 username, email, password를 입력 받습니다.
- '로그인' 버튼을 클릭하면 다음 view controller로 이동합니다. 이동한 view에서 입력 받은 username과 email을 보여줍니다
- username이 두 글자 미만일 때 로그인 버튼을 클릭하면 'username은 두 글자 이상이어야 합니다' 라는 메시지의 Alert view를 띄우고, 다음 뷰로 이동하지 않습니다. 
- 비밀번호 textfield는 입력시 '***'와 같이 마스킹되어야 합니다. 
- 세 개의 textfield는 하나의 UiView 또는 UIStackView로 감싸져 있어야 합니다. (다음 그림을 참고해주세요)

<img width="300" alt="home" src="https://user-images.githubusercontent.com/48316900/188650564-3740fa61-28ba-477b-9ec9-ced925203acb.png">

2. 유저 정보 화면
- 홈 화면에서 UserInfo로 넘겨 준 username과 email을 보여줍니다.
- 두 개의 label 하단에 로그아웃 버튼이 있고, 탭하면 다시 홈 화면으로 돌아갑니다
![Simulator Screen Shot - iPhone 13 Pro - 2022-09-06 at 22 45 23]()

<img width="300" alt="home" src="https://user-images.githubusercontent.com/48316900/188651288-5193b54c-dba0-4c45-85bc-66d190a31c8b.png">

## 추가 과제
- 홈 화면에서 username, email, password를 입력하고 유저 정보로 넘어간 후, 앱을 종료했다가 다시 실행하더라도 홈 화면이 아니라 직전 로그인한 유저 정보가 나타날 수 있도록 구현해주세요
- 참고 : SceneDelegate / UserDefault

- 모든 view는 auto layout이 적용되어 있어야 합니다.
- 다음 view로 넘어가는 과정에서 username, email을 감싸고 있는 UserInfo struct를 만들어 넘겨주세요
- 디자인은 자유롭게 해주세요.


## 제출 방식
1. 자신의 GitHub 개인 계정에 `waffle-rookies-20.5-ios` 이라는 이름으로 private repository를 개설합니다. 개설할 때 Add a README file을 체크해 주세요. 그리고 저희가 과제를 하시는 분이 누구인지 식별할 수 있도록 README file에 이름이 포함된 간단한 정보를 적어 주세요.

![image](https://user-images.githubusercontent.com/39977696/131165209-a6da208f-e12c-4e74-9d45-321916ded169.png)

2. 개설 후 Settings > Manage access 로 들어갑니다. (다음 그림을 참고해주세요)

![스크린샷 2020-08-30 02 13 52](https://user-images.githubusercontent.com/35535636/91642567-5eb9fe00-ea67-11ea-9382-89fcce03be70.png)

3. collaborator 로 세미나장 @Ethan-MoBeau 를 등록해 주세요. (다음 그림을 참고해주세요)

![스크린샷 2020-08-30 02 14 59](https://user-images.githubusercontent.com/35535636/91642588-87da8e80-ea67-11ea-9d5a-60a3596463c9.png)

4. `seminar-0-assignment` 브랜치에서 과제를 진행해 주세요. 앞으로 과제들은 같은 레퍼지토리의 다른 브랜치에서 진행하게 될 것입니다.

5. 과제 제출 시, main 브랜치로 pull request를 생성해 주세요.

6. 마감 시점의 pull request 를 기준으로 세미나장들이 직접 확인하고 피드백을 드릴 것입니다.

## 참고 키워드
1. UIView
2. UIViewController / initialize promagramatically / present / dismiss / safeAreaLayoutGuide
3. UINavigationController / rootViewController / pushViewController / popViewController
4. AutoLayout / Constraints
5. UITextfield
6. UILabel
7. struct (구조체) / class (클래스) / OOP / value type, reference type
8. Github fork / pull request 
9. UIButton / addTarget / @objc func
