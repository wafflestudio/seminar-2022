# Higher-Order Functions
// 다른 function을 parameter로서 사용하고, function을 return하는 함수.

fun calculate(x: Int, y: Int, operation: (Int, Int) -> Int): Int{
    return operation(x,y)
}

fun sum(x: Int, y: Int) = x + y

fun main(){
    val sumResult = calculate(4, 5, ::sum) // kotlin에서 function을 인자로 넣을 때, "::"를 붙여 function에 대한 reference를 이름으로 받아와 사용한다.
    val mulResult = calculate(4,5) {a, b -> a * b} // 고차 함수를 람다로 수행한다. 
}

// Returning Functions
// return 값으로 함수를 내보낼 수 있다. 이 때는 ::를 통해 배출할 수도 있다.
fun operation() : (Int) -> Int{ // return type에 유의하라.
    return ::square
}

fun square(x: Int) = x * x

fun main(){
    val func = operation() // func라는 변수는 이제 sqaure로 바뀌었다.
    println(func(2))
}

#Lambda functions

val upperCase1: (String) -> String = { str: String -> str.uppercase()}
val upperCase2: (String) -> String = {str -> str.uppercase()}
val upperCase3: {str: String -> str.uppercase()}
// 둘 다 타입을 풀어버리면 컴파일러가 타입을 유추할 수 없다. 따라서 아래처럼 둘 다 풀면 안된다.
// val upperCase4 = { str -> str.uppercase()} 

// 1개의 파라미터를 가진 lambda의 경우, 그냥 it variable로 사용할 수 있다.
val upperCase5: (String) -> String = {it.uppercase()}
// 만약 lambda가 하나의 function call로 구성된다면, function pointer(::) 를 사용할 수 있다.
val upperCase6: (String) -> String = String::uppercase

# Extension Functions and Properties
// 확장하려는 타입을 부조건 명시해 주어야 한다.