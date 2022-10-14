# React Seminar Assignment-3

## 제출 기한

* 11월 5일 자정(23:59)까지 제출

## 과제 목적

* 백엔드와 HTTP 통신을 할 수 있다.
* 무한 스크롤과 쓰로틀링(throttling)을 구현할 수 있다.

## 스펙

가게 목록과 리뷰 목록을 추가하고, 기존 기능에도 백엔드 API를 연결합니다.

* UI는 [Figma](https://www.figma.com/file/1epI2tF5Lh8EG43zyYVQyn/react-assignment?node-id=2236%3A370)를 참고하세요
* API 연결 관련 스펙 및 문서
  * 자세한 API 스펙은 [Swagger](https://ah9mefqs2f.execute-api.ap-northeast-2.amazonaws.com/docs/static/index.html)를 참고하세요
  * API endpoint: https://ah9mefqs2f.execute-api.ap-northeast-2.amazonaws.com
  * 메뉴와 리뷰의 데이터를 불러오거나 추가, 삭제, 변경하는 기능은 모두 API와 연결합니다.
  * 로그인 및 로그아웃 기능도 API와 연결합니다.
    * `POST /auth/login` 요청을 날리면 `access_token`이 response body에 담겨 날아옵니다. 이 토큰은 Context API 등을 통해 관리하세요.
    * 인가(authorization)가 필요한 API 요청을 날릴 때에는 `authorization` 헤더에 `Bearer ${access_token}` 형식으로 토큰을 넣으세요.
    * 로그아웃할 때는 `POST /auth/logout` 요청을 날리고 저장해두었던 `access_token`을 삭제하세요.
* 검색 기능 관련 변경
  * 메뉴와 가게 이름 검색 기능은 API를 활용합니다. API 요청 간격이 최소 0.5초로 제한되도록 throttling을 적용합니다.
* 가게 목록 페이지
  * 홈 화면에는 가게 목록이 뜹니다.
* 별점 관련 스펙
  * 메뉴 데이터 및 UI에 별점이 추가되었습니다.
  * 가게 정보에도 평균 별점이 포함됩니다.
  * 별점 아이콘은 0.5로 반올림해서 표시하면 됩니다. 가능하다면 소수점이 정확하게 표현되도록 구현하셔도 좋습니다.
* 리뷰 관련 스펙
  * 메뉴 리뷰 기능이 추가되었습니다.
  * 리뷰 목록은 무한 스크롤로 구현하세요. 즉, 스크롤을 내리면서 추가로 리뷰가 로딩되어야 합니다.
  * 로그인한 상태에서는 누구나 리뷰를 개수 제한 없이 쓸 수 있습니다.
  * 자신의 리뷰를 수정하거나 삭제할 수 있습니다.
  * 리뷰를 작성할 때 별점도 추가해야 합니다.
* 외부 라이브러리 사용
  * 이번 과제부터 외부 라이브러리 사용을 전면 허용합니다.
  * 리뷰 작성 날짜가 reddit처럼 ~~ ago 형식으로 나타납니다. 적절한 라이브러리를 활용하여 처리하고 해당 라이브러리를 선택한 이유를 PR에 첨부하세요.
  * 기타 UI 관련 라이브러리도 사용하실 수 있습니다.
* alert 관련 변경사항
  * `window.alert` 함수의 사용은 일반적으로 UI상 좋지 않습니다.
  * 이번 과제에서 `window.alert`(또는 `alert`) 함수의 사용은 금지됩니다.
  * 대신 적당한 토스트 라이브러리를 찾아서 사용하세요.
* 헤더 관련 변경사항
  * 메뉴 목록이나 상세 페이지에서는 헤더에 현재 보고 있는 가게의 이름이 뜹니다.
* 코드 퀄리티
  * prettier로 코드 포맷팅 하세요.
  * PR 열기 전에 eslint 돌리고 제출하세요.
    * 가능하면 eslint 오류나 경고가 없도록 짜주시고, 해결하지 못한 오류가 있는 경우 PR에 해당 오류에 관한 변명(?)을 써 제출하세요.
* 기타 당부사항
  * `axios` 관련해서 예외 처리 잘 해주시기 바랍니다.
  * `document.getElementById`를 비롯하여 DOM을 통해 HTML 요소를 직접 가져오는 코드는 모두 금지입니다. 절대 쓰지 마세요.
* 피그마 UI가 별로일 거에요. 재량껏 더 예쁘게 짜주셔도 됩니다.

## 제출 방법

[과제 2](../seminar-2/assignment-2.md)에서와 같이 기존 레포에서 새로운 브랜치를 파서 진행하고 PR을 통해 제출합니다.