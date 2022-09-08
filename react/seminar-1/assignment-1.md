19.5-rookies Seminar 1 Assignment
================================

### **due: 2021.09.17(토) 23:59**

## 과제 목적

- React 로 컴포넌트를 다루고 페이지를 만들 수 있다.
- CRA로 만든 앱을 S3와 Cloudfront를 통해 배포할 수 있다.

## 과제 스펙

- 디자인 및 기획: [피그마](https://www.figma.com/file/b5AIN50E1qI3eiZkZxaYfS/react-assignment-1) 참조
- 스펙
    1. 종합
        - 추가, 수정, 삭제 기능이 있는 메뉴 관리 프로그램이다.
        - 이름은 1 ~ 20 글자의 한글이다.
        - 가격은 100 ~ 1,000,000 사이의 숫자이며, 10원 단위로 끊는다.
        - 각 메뉴는 같은 이름을 가질 수 없다.
        - 필터나 검색, 추가 등의 로직에서 O(n)을 하기 싫고 왠지 이진탐색을 하고 싶을 수 있다. 하지만 성능 최적화와 관련된 부분은 고려하지 않아도 괜찮다.
            - 대부분의 상황에서, 그건 백엔드 개발자가 생각할 부분이다.
            - 하지만 아직 백엔드와의 통신을 배우지 않았기 때문에 불가피하게 해당 로직을 프론트엔드에서 구현해야 한다.
        - 본 스펙에서 명시하지 않은 세세한 부분들은 따로 채점하지 않으며, 본인이 보기에 "옳다"고 생각되는 대로 구현하면 된다.
    2. 데이터
        - 초기 데이터는 [이 파일](data.json)의 데이터를 사용한다.
            - `name`: 이름
            - `price`: 가격
            - `image`: 사진 url, 없을 수 (`""`) 있다. 이 경우 대체 텍스트를 적당히 띄운다.
    3. 헤더
        - 로고 또는 제목 클릭 시 새 탭에서 [와플스튜디오 홈페이지](https://wafflestudio.com) 가 열린다.
    4. 리스트
        - 메뉴의 목록이 뜬다.
        - 메뉴가 많아 칸을 넘어갈 시 아래로 스크롤되어 처리되어야 한다.
        - 검색에 뭔가를 입력할 시, 이름으로 필터링한 결과를 보여준다.
            - 따로 엔터를 치거나 등의 활동을 하지 않아도, 그냥 해당 `input`의 `value` 를 `name`이 포함하고 있는 메뉴 리스트를 출력하면 된다.
            - (ex: `딸기` 입력 -> `딸기와플` 등이 보임)
        - 좌하단의 `추가` 버튼을 클릭하면 메뉴를 추가할 수 있는 모달이 뜬다.
            - 모달 외부를 클릭했을 때 모달이 닫혀야 한다.
            - 가격은 숫자만 입력할 수 있으며, 가격을 입력할 때 자동으로 쉼표(`,`)가 들어간다.
                - e.g. `12300` 입력: `"" - "1" - "12" - "123" - "1,230" - "12,300"`
            - `추가` 버튼을 클릭했을 때
                - 이름이나 가격이 올바르지 않다면 적당히 alert를 띄운다. (상품 이미지는 어떤 값이든 상관없다)
                - 이미 있는 메뉴와 같은 이름의 메뉴가 추가될 경우 적당히 alert를 띄운다.
                - 메뉴의 이름과 가격이 적절하다면 메뉴를 추가하고, 모달을 닫고, 추가된 메뉴를 자동으로 선택한다.
            - 모달이 열리고 닫힐 때는 서서히 열리고 서서히 닫히는 transition이 있다.
                - [이 사이트](https://getbootstrap.com/docs/4.0/components/modal/#vertically-centered) 에서 모달이 열리고 닫히는 방식 참고
                - 위 사이트처럼 열릴 때 살짝 이동하는 것까지 전부 구현될 필요는 없으나, 아무튼 뜨거나 사라질 때 서서히 나타났다가 사라지는 효과가 있어야 한다.
        - 선택되지 않은 메뉴의 경우, 메뉴 위에 마우스가 올라가 있을 때 메뉴의 색상이 바뀐다.
            - 클릭했을 때 해당 메뉴를 선택하고, 이때 이미 선택된 메뉴가 있다면, 그 메뉴는 자동으로 선택이 해제된다.
    5. 상세 뷰
        - 선택된 메뉴의 상세 뷰이다.
        - 선택된 메뉴가 없다면 상세 뷰는 나타나지 않는다.
        - 우측 상단의 `닫기` 버튼을 클릭하면 선택이 해제된다.
        - 프로필 사진은 현재 프로필 사진 url에 있는 값이 뜨도록 한다. 대체 텍스트 (혹은 대체 사진)는 적당히 지정한다.
        - `수정` 버튼을 클릭하면 수정 모달이 뜬다.
            - 이름, 가격, 이미지 url의 기본값으로 메뉴의 값이 들어간다.
            - 추가 모달과 UI와 기능은 비슷하다.
            - 추가할 때와 마찬가지로 올바르지 않은 값이 입력되면 alert를 띄운다.
        - `삭제` 버튼을 클릭하면, 정말로 삭제할지 묻는 모달이 뜬다.
            - 다시 `삭제`를 클릭하면 모달이 닫히고 메뉴가 삭제된다.
            - 이때 선택된 메뉴가 없는 상태가 된다.
    6. 배포를 해야 한다.
        - aws 개인 계정을 생성하고, 그를 이용해 만든 사이트를 빌드하고 S3과 cloudfront에 배포한다.
        - cloudfront에 배포된 url을 PR과 리드미에 첨부한다.
        - `package.json`을 수정하여 소스맵이 안 보이게 한다.
          - `"build": "GENERATE_SOURCEMAP=false react-scripts build`

## 주의사항

- 세미나장의 부족한 센스로 인해 디자인이 별로일 수 있습니다.
    - 스타일을 완벽히 똑같이 가져가실 필요는 없고, 간단한 여백 및 색상 등은 자유롭게 조정하실 수 있습니다.
    - 단, ui 및 스펙과 관련된 것은 변경하실 수 없습니다.
    - ui 역시 좋지는 않습니다만, 난이도 조정을 위해 이렇게 결정되었습니다 (추후 변경될 수 있습니다)
- 기타 꾸미고 싶으신 게 있으시다면 자유롭게 꾸며주셔도 좋습니다.
- `react-modal`이나 `react-bootstrap` 등 스타일에 이용되는 라이브러리를 사용하지 말고, `Create-React-App`이 설치해 준 라이브러리들만 가지고 직접 구현해야 합니다.

## 제출 방식 및 제출 주의사항

- [과제 0 제출 방식](../seminar-0/submission-guide.md)을 참고하되 레포지토리 이름을 `waffle-2022-seminar-react-assignment-1`로 합니다.
- 생성하는 브랜치의 이름은 `assignment-1`로 합니다.
- 이번 과제에서 생성한 레포지토리를 앞으로의 과제에서도 사용할 예정입니다.

## 참고하면 좋은 것들

- [해당 문서](../study-links.md) 참조