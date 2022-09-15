# let
// let은 scoping과 null-checking에 쓰인다.
// 블럭 내의 코드를 다 실행하고 마지막 expression의 결과를 return한다.
// it Reference를 통해 블럭 안에서 object에 접근할 수 있다.
val empty = "test".let{
    customPrint(it)
    it.isEmpty()
}
println(" is empty: $empty")

fun printNonNull(str: String?){
    println("Printing \"$str\" : ")

// 이런 설정을 통해 null 값이 아닐때만 해당 코드 블럭이 수행되도록 조정
    str?.let{
        print("\t")
        customPrint(it)
        println()
    }
}

fun printIfBothNonNull(strOne: String?, strTwo: String?){
    strOne?.let{ firstString ->
    strTwo.let{ secondString ->
    customPrint("$firstString : $secondString")}}
    println()
}

printNonNull(null)
printNonNull("my string")
printIfBothNonNull("First", "Second")

# run
// let같이 블럭 내 코드를 수행하고, 결과를 반환한다. 차이점은 this를 통해 object에 접근할 수 있는데, 이것은 해당 object의 메서드를 사용해야 할 때 유용하다.
// 반대로, let은 인자를 단순히 넘기는 상황에서 쓰였다는 차이가 있다.

// 여기서 보면, 심지어는 this없이 그대로 메서드(or attribute(?))가 뽑히는 것을 알 수 있다.
fun getNullableLength(ns: String?){
    println("for \"$ns\" : ")
    ns?.run{
        println("\t is empty? " + isEmpty())
        println("\t length = $length")
        length
    }
}

# with
// 어떤 instance의 멤버(필드값)을 참조할 때 instance name쓰는 걸 생략할 수 있게 한다.
with(configuration) {
    println("$host : $port")
}

// instead of:
println("${configuration.host}:${configuration.port}")

# apply
// apply는 코드 블럭을 수행하고, 해당 object 그 자체를 반환한다. 이 object는 내부에서 this로 접근할 수 있다.
// 이 함수는 object를 초기화 시키는데 주로 사용하기 용이하다.

val jake = Person()
val stringDescription = jake.apply{
    name = "Jake"
    age = 30
    about = "Android developer"
}.toString()

# also
// apply같이 코드 블럭을 실행하고 object 자체를 반환한다. 블럭내에서는 it을 통해 참조되며, 그래서 argument로서 넘기는 상황에서 보다 유리하다.
// 이 함수는 추가적인 action을 끼워넣는데 편리하다.
val jake = Person("jake", 30, "android developer").also{
    writeCreationLog(it)
}