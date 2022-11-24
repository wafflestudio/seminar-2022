---
marp: true
theme: default
paginate: true
---

# Waffle Studio 2022 안드로이드 세미나
김상민 (@sanggggg)

---

## 관계형 데이터베이스

#### 배워야 하는 이유
- Android 개발에 있어서 Room 과 같은 local database 의 사용은 필수 사항은 아닙니다.
- 특히 백엔드 서버가 존재하는 어플리케이션의 경우 일반적으로 데이터의 영속화를 서버가 담당하게 되며 앱 단에서 local database 는 cache 정도의 수준으로 쓰이기도 합니다.
- 하지만 관계형 데이터베이스를 어떻게 다루는지는 프로덕트를 개발할 때 중요한 개념이므로 이번 기회에 배우는 것을 추천드립니다.

---

## 관계형 데이터베이스

#### 개념
- 열과 행으로 표현되는 테이블로 정보를 저장한다.
- 이때, 다른 테이블과의 연관관계를 지정하여 관리할 수 있다.

---

## 관계형 데이터베이스 - 정보를 저장하는 방식

#### Lecturer
| id | name | major |
| ------- | ------- | ------- |
| 1234 | 김상민 | Android Development |
| 9999 | 변다빈 | Server Development |

#### Lecture
| id | name | description | lecturer_id|
| ------- | ------- | ------- | ------ |
| 1 | 와플 루키 안드로이드 세미나 | 안드로이드 초보 강좌입니다. | 1234 |
| 2 | 와플 루키 백엔드 세미나 | 서버 개발 초보 강좌입니다. | 9999 |

---

## 관계형 데이터베이스 - 정보를 수정하는 방법 

#### SQL
- kotlin 을 통해 안드로이드 개발을 하는 것 처럼
- 관계형 데이터베이스를 수정하기 위해서 우리는 SQL(Structured Query Language) 을 사용합니다

```sql
SELECT id, name FROM lecturer WHERE major="Android Development";
INSERT INTO lecturer VALUES (10, "홍길동", "Something");
DELETE FROM lecturer WHERE major="Server Development";
```

---

## Room Database

- 안드로이드 기기 내에 위에서 설명한 데이터베이스를 접근하는 방법 중 하나.
- 안드로이드 기기 내에는 보통 경량 RDBMS 인 sqlite 가 탑재되어 있습니다.
- 이 sqlite 에 대해서 schema 를 만들거나, query 를 날리는 방법을 쉽게 해 주는 라이브러리입니다.

---

## Room Database - ORM

#### ORM
- Object Relational Mapping
- DB 에 조회한 값이나 insert 하는 값은 단순한 문자열(tuples)
- 이런 문자열을 직렬화/역직렬화 하면서 우리가 조작하기 쉬운 객체(Object) 로 DBMS 와 소통할 수 있게 도와준다.
- 따라서 Room 또한 ORM 으로 기능한다고 볼 수 있습니다.

---

## Room Database - Schema (Entity)

#### Entity
- 내가 만든 table 의 schema 를 매핑될 객체의 field 정의를 통해서 만들 수 있다.

```kotlin
@Entity
data class Schedule(
   @PrimaryKey val id: Int,
   @NonNull @ColumnInfo(name = "stop_name") val stopName: String,
   @NonNull @ColumnInfo(name = "arrival_time") val arrivalTime: Int
)
```

---

## Room Database - DAO

#### DAO (Data Access Object)
- 데이터에 접근하기 위한 방법을 알려준다.
- 내가 날리고 싶은 쿼리들을 함수와 어노테이션의 형태로 등록해 두면, 이에 대응하는 함수를 구현하여 제공한다.

```kotlin
@Query("SELECT * FROM lecturer ORDER BY arrival_time ASC")
fun getAll(): List<Lecturer>
```

---

## 과제

- [Project 3: Cocktailer Application]() (TBA)
- 중요: 토이프로젝트 안내
