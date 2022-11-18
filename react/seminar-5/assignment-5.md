# React Seminar Assignment-5

## 제출 기한

* 11월 26일 자정(23:59)까지 코드 리뷰 작성
* 11월 30일 자정(23:59)까지 리뷰 답변 & 반영

## 과제 목적

* 너와 나의 코드 리뷰를 통해 지금까지 배운 내용과 내가 쓴 코드를 돌아본다.

## 스펙

* 빠른 시일 내로 (아마 월요일 안으로) 코드 리뷰를 진행할 *짝*을 공지할 예정입니다.
* 짝의 코드를 한줄 한줄 살피면서 잘한 점, 못한 점, 궁금한 점 등을 코드 리뷰를 통해 5개 이상 달아주시면 됩니다.
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
* 짝을 자신의 레포에 collaborator로 초대합니다. 처음에 저 초대했을 때처럼 하시면 돼요
* PR에서 짝에게 review request를 걸어줍니다.