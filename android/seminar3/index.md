---
marp: true
theme: default
paginate: true
---

# Waffle Studio 2022 안드로이드 세미나
김상민 (@sanggggg)

---

# 할 일
- codelab 복습
- codelab quiz

---

## 복습: 비동기 처리
- I/O 를 기다리는 것은 일반적으로 많은 시간이 소모된다.
  - 외부에서 응답을 늦게 줄 수도 있고
  - 응답이 오고가는 레이턴시가 길 수도 있고.

```kotlin
val connection = makeIORequest(req)
while (true) {
  if (connection.isArrived()) {
    break
  }
  // wait...
}
val response = connection.response
```

---

## 복습: 비동기 처리
- 그렇다면 이렇게 기다리면 되는 것 아니냐?
- 발생하는 문제 -> android 시스템도 똑같은 일을 한다
- "사용자의 입력이 도착하는 것을 계속 감지한다"

```kotlin
while (true) {
  val touch = getUserTouch()
  if (touch != null) {
    view.propagateTouchEvent(touch)
  }
  veryVeryLongTask() // <--- 이런게 들어가면 어떻게 되는거지...?
}
```

---

## 복습: 비동기 처리
- [ANR](https://developer.android.com/topic/performance/vitals/anr?hl=ko)
> Android 앱의 UI 스레드가 너무 오랫동안 차단되면 'ANR(애플리케이션 응답 없음)' 오류가 트리거됩니다. 앱이 포그라운드에 있으면 그림 1에서와 같이 시스템에서 사용자에게 대화상자를 표시합니다. 사용자가 ANR 대화상자에서 앱을 강제 종료할 수 있습니다.

- UI 를 컨트롤 하는, 절대 block되면 안되는 thread 를 UI Thread 라고 정하고
- 이 UI thread 에서는 오래걸리는 작업 (I/O) 작업을 하지 말자.
- 대신 이건 별도의 thread 를 만들어서 처리하자!

---

## 복습: Coroutine

- 하지만 동시성 처리는 어렵다
  - race condition 등으로 인해 발생하는 논리적 오류
  - 물리자원을 사용하기 때문에 발생하는 리소스 사용량을 고려하기 등...
- 이걸 쉽게 하기 위해 Coroutine 을 사용한다.

---

## 복습: Coroutine
- Scope 에 대해서 작업 (runnable lambda) 을 launch 한다.

```kotlin
import kotlinx.coroutines.*

fun main() {
    repeat(3) {
        GlobalScope.launch {
            println("Hi from ${Thread.currentThread()}")
        }
    }
}
```

---
## 복습: Coroutine
- Job
  - 취소 가능한 작업 단위(예: launch() 함수로 만든 작업 단위)입니다.
- CoroutineScope
  - launch() 및 async()와 같은 새 코루틴을 만드는 데 사용되는 함수는 CoroutineScope를 확장합니다.
- Dispatcher
  - 코루틴이 사용할 스레드를 결정합니다. Main 디스패처는 항상 기본 스레드에서 코루틴을 실행하지만 Default나 IO, Unconfined와 같은 디스패처는 다른 스레드를 사용합니다.
---

## 복습: Coroutine
- `suspend`
  - coroutine 을 통해서 실행되어야 하는 함수를 표시하는 방법
  - 이 함수는 중간에 실행을 멈추고 잠시 대기하는 상황이 존재한다!

---
## 복습: Coroutine
- async vs launch
  - async 로 받은 Job 을 통해 실행을 취소 시키거나 결과값을 기다릴 수 있다.

```kotlin
fun main() {
    runBlocking {
        val num1 = async { getValue() }
        val num2 = async { getValue() }
        println("result of num1 + num2 is ${num1.await() + num2.await()}")
    }
}
```

---
## 복습: Coroutine

```kotlin
import kotlinx.coroutines.*

fun main() {
   val states = arrayOf("Starting", "Doing Task 1", "Doing Task 2", "Ending")
   repeat(3) {
       GlobalScope.launch {
           println("${Thread.currentThread()} has started")
           for (i in states) {
               println("${Thread.currentThread()} - $i")
               delay(5000)
           }
       }
   }
}
```
---
## Quiz: coroutine

다음 중 코드에서 스레드를 직접 사용하는 경우 초래될 수 있는 위험은 무엇인가요?
적절한 답변을 모두 선택합니다.

- 경합 상태 발생
- 출력이 일관되지 않음
- UI가 응답하지 않음

---
## 복습: HTTP
> HTTP(HyperText Transfer Protocol, 문화어: 초본문전송규약, 하이퍼본문전송규약)는 W3 상에서 정보를 주고받을 수 있는 프로토콜이다. 주로 HTML 문서를 주고받는 데에 쓰인다. 주로 TCP를 사용하고 HTTP/3부터는 UDP를 사용하며, 80번 포트를 사용한다. 1996년 버전 1.0, 그리고 1999년 1.1이 각각 발표되었다.

- 인터넷 통신을 할 때 서로 값을 주고받는 방법
- 요청 -> 응답의 형태로 데이터를 주고받는 방식 중 하나이다.
  - 요청 -> 응답이 아니라면?
  - 연결을 맺으면 한 쪽이 일방향적인 데이터를 쏴 준다던가... (push)
  - 그런데 HTTP/2 부터는 Push 도 되긴 한다
  
---

## 복습: HTTP
- 서버에게 요청 (Request) -> 나 식당 정보가 필요해~
- 서버의 응답 (Response) -> 이 주변에는 ~ 식당들이 있어.
- HTTP 요청은 아래와 같은 구성요소들로 이뤄진다.
  - `받는 사람`: 도메인 주소 (www.naver.com)
  - `원하는 행동`: POST, GET, PUT, DELETE
  - `부가정보`: Header (나의 인증 토큰, 내가 접속한 브라우저 정보 등)

---

## 복습: 안드로이드에서 HTTP 통신하기
- [Retrofit](https://square.github.io/retrofit/)
- HTTP 요청 endpoint 를 쉽게 만들어 응답을 주고받기 쉽게 만들어준다.

```kotlin
interface FoodService {
  @GET("food/")
  suspend fun getAllFoods(): List<Food>
}

val retrofit = Retrofit.Builder()
  .baseUrl("https://www.food.com/")
  .build()

val foodService = retrofit.create(FoodService::class.java)

GlobalScope.launch {
  val allFoods = foodService.getAllFoods()
}
```

---
## 복습: try - catch
- 외부에 대한 요청은 일반적으로 실패할 경우의 수들이 많다 (인터넷 연결이 없으면, 도메인이 사라졌으면...?)
- 이를 쉽게 처리하기 위한 모델링 방법 -> `try catch`
```kotlin
try {
  someIOTask()
} catch (e: Exception) {
  Log.e(e)
}
```

---
## 복습: JSON
- 자료를 주고 받을 때 쓰는 포맷 중 하나
`이 주변에는 A 밥집이랑 B 밥집이 있어`
vs
`{ restaurants: [{ name: "A" }, { name: "B" }] }`
- 코드로 작성할 때 훨씬 접근하기 쉽겠죠?
```kotlin
val restaurantNames = restaurants.map { it.name }
```
---
## 복습: JSON
- JSON 은 단순한 문자열, 이것을 프로그래밍 언어에서 인식 가능한 구조체로 변환해 주는 일을 Serializer/Deserializer 들이 한다.
- Moshi 는 그런 JSON Serializer 중 하나

```kotlin
data class Restaurant(
  val name: String
) 
val moshi = Moshi.Builder().build()
val restaurantAdapter = moshi.adapter(Restaurant::class)
val Arestaurant = restaurantAdapter.fromJson("{ \"name\" : \"A\" }")
```
---

## 복습: Debugging!
- 내가 작성한 코드가 어떻게 돌아가는 지 효율적으로 알 수 있는 방법
- 뭔가 보여드리겠습니다.

---

## 과제

- [android-basics-kotlin unit 5](https://developer.android.com/courses/android-basics-kotlin/unit-5?hl=ko)
- [Project 2: TODO App](https://github.com/wafflestudio/seminar-2022-android-assignment/tree/main/assignment-1)
