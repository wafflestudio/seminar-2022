# React Seminar Assignment-5

* 수정사항
  * 11/24: 제출 기한과 세부 스펙을 수정하고 제출 과정 구체적으로 작성
  * 11/24: 제출 기준 완화

## 제출 기한

* (강력히 권장: 11월 28일 자정(23:59)까지 코드 리뷰 작성)
* 11월 30일 자정(23:59)까지 리뷰 답변 & 반영
* 이번 과제는 토이프로젝트 시작과 맞물려있는 관계로 graceday 사용이 불가합니다. 30일 이전에 적어도 코드 리뷰 작성까지는 마쳐주시기 바랍니다.

## 과제 목적

* 너와 나의 코드 리뷰를 통해 지금까지 배운 내용과 내가 쓴 코드를 돌아본다.

## 스펙

* 조 편성: [스프레드시트](https://docs.google.com/spreadsheets/d/e/2PACX-1vTzowkYlsyyO74zo9b80IUh97bD9G-A55VwOcMP8yriKz59ThSaEsFNwJWWBWVbdf9uQMNViPQTT53D/pubhtml?gid=860048592&single=true)
* 다른 조원의 코드를 한줄 한줄 살피면서 잘한 점, 못한 점, 궁금한 점 등을 코드 리뷰를 달아주시면 됩니다.
  * 3명인 조는 나머지 두 조원에게 각각 3개의 코드리뷰를 작성합니다.
  * 2명인 조는 상대방 조원에게 6개의 코드리뷰를 작성합니다.
  * 조 편성은 과제 3의 완성도, graceday 사용횟수 등을 기준으로 가능한 고르게 배치했습니다. 조 편성 과정 중에 산출한 점수는 세미나 통과 여부와 무관합니다
* 코드 리뷰를 받은 후에는 적당히 코멘트나 반응을 달고 필요한 경우 코드를 수정한 후 머지합니다.
* 코드 리뷰과 피드백 반영한 내용을 제가 살피면서 중요하다 싶은 건에는 코멘트를 달 겁니다.

## 제출 방법

* main 브랜치의 첫번째 커밋으로 checkout한 뒤 release 브랜치를 생성하여 push합니다.
---
진행 과정 예시:
```
$ git status
On branch assignment-3
nothing to commit, working tree clean
$ git switch main
Switched to branch 'main'
Your branch is up to date with 'origin/main'.
$ git pull
Already up to date.
$ git log
...
("G" 키를 누르면 맨 밑으로 이동합니다)
commit 56721356be71c149e2a76216f070612178850ddb
Author: joongwon <winterdawnlight@snu.ac.kr>
Date:   Wed Sep 14 23:54:27 2022 +0900

    add functionality

commit b5d24acac8efa4153e954335fa1d09fecaf45077
Author: 안중원 <freleefty@gmail.com>
Date:   Mon Aug 29 21:02:09 2022 +0900

    Initial commit
$ git checkout b5d24a # 가장 처음의 커밋 id에서 대충 맨 앞 6자리 정도 써주면 됩니다.
Note: switching to 'b5d24a'.
...
$ git switch -c release
Switched to a new branch 'release'
$ git push --set-upstream origin release
Total 0 (delta 0), reused 0 (delta 0), pack-reused 0
remote:
remote: Create a pull request for 'release' on GitHub by visiting:
remote:      https://github.com/joongwon/waffle-2022-seminar-react-assignment-1/pull/new/release
remote:
To https://github.com/joongwon/waffle-2022-seminar-react-assignment-1.git
 * [new branch]      release -> release
branch 'release' set up to track 'origin/release'.
```
---
* 지금까지 진행한 과제에서 release 브랜치로 머지하는 PR을 엽니다.
  * 아마 assignment-4 -> release로 PR 열면 충분할 겁니다.
* 조원들을 자신의 레포에 collaborator로 초대합니다. 처음에 저 초대했을 때처럼 하시면 돼요
* PR에서 조원들에게 review request를 걸어줍니다.
* 조원이 열어놓은 PR에 자신의 리뷰를 작성하여 제출합니다. PR의 `File changed` 탭에 들어가서 코멘트하고 싶은 코드를 긁어 코멘트를 작성하고, `Review changes` 버튼을 누르면 나타나는 `Submit review`을 눌러 제출합니다. 여러 개의 코멘트를 한 번에 제출할 수 있으니 참고하세요.
* 자신의 PR에 작성된 다른 조원들의 리뷰에 답변이나 코멘트를 달고 반영할 사항이 있다면 코드에 반영합니다.