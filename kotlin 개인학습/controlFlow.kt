# When
// switch 구문의 보다 직관적인 버전.

// when statement
fun main(){
    cases("Hello")
    cases(1)
    cases(0L)
    cases(Myclass())
    cases("hello")
}
fun cases(obj: Any){ // Any는 Object같은 느낌
    when(obj){
        1 -> println("One")
        "Hello" -> println("Greeting")
        is Long -> println("Long")
        !is String -> println("Not a String")
        else -> println("Unknown")
    }
}
class Myclass
>> greeting
>> One
>> Long
>> Not a String
>> Unknown
// 순차적 수행이라는 점에 유의하기.


# Loops
// for
val cakes = listOf("c", " ch", "cho")
for (cake in cakes){
    println("Yummy, $cake")
}
// while and do-while

// Iterators
// 내 class에 자신만의 Iterator를 정의할 수 있다.
class Animal(val name: String)
class Zoo(val animals: List<Animal>){
    operator fun iterator(): Iterator<Animal>{
        return animals.iterator()
    }
}

fun main(){
    val zoo = Zoo(listOf(Animal("zebra"), Animal("lion")))
    // iter 정의를 통해 for문을 순회할 수 있게 된다.
    for (animal in zoo){
        println("it's a ${animal.name}")
    }
}

// Ranges
for(i in 0..3){
    print(i)
}
>> 0123
for(i in 0 until 3){
    print(i)
}
>> 012
for(i in 2..8 step 2){
    print(i)
}
>> 2468
for(i in 3 downTo 0){
    print(i)
}
>> 3210
for(c in 'a'..'d'){
    print(c)
}
>> abcd
for(c in 'z' downTo 's' step 2){
    print(c)
}
>> zxvt
// between 연산에서도 이점이 있음
val x = 2
if(x in 1..5){
    print("x가 1~5사이에 존재")
}
if(x !in 6..10){
    print("x가 6~10 사이에 존재 x")
}

# Equality Checks
//a == b =>  if (a == null, b == null) else a.equals(b)
// SetOf() 내용물의 순서와 상관없이 == 비교하면 내용물의 비교를 한다.
// "==="는 Referential Comparison이다. 즉, 주소값 같은지(같은 객체) 비교

# Data Classes
// 데이터 클래스는 값을 저장하는 클래스를 만들기 용이하게 해준다.
// copy, toString(), using instances in collections를 위한 기본 메서드가 제공된다.
// 참고로 컬렉션이란 List와 Set의 상위 개념이다.

data class User(val name: String, val id: int){
    override fun equals(other: Any?) = other is User && other.id == this.id
}

fun main(){
    val user = User("Alex", 1)
    println(user)

    val secondUser = User("Alex", 1)
    val thirdUser = User("Max", 2)

    println("user == secondUser: ${user == secondUser}")
    println("user == thirdUser: ${user == thirdUser}")

    // hashCode() function
    println(user.hashCode())
    println(secondUser.hashCode()) 
    // user와 hashcode 동일하다. 여기서 알수 있는것은 내용물이 같으면 Data Class는 객체를 중복생성하지 않는다.
    println(thirdUSer.hashCode())

    // copy() function
    println(user.copy())
    println(user === user.copy()) //>> false
    // copy하면서 값을 바꿔넣을 수 있음.
    println(user.copy("Max"))
    println(user.copy(id = 3))

    println("name = ${user.component1()}")
    println("id = ${user.component2()}")
    // >> [instance].component1() -> 첫번째 인자 꺼내오기.

}

# Enum Classes
// 방향, 상태, 모드 등을 표현할 때, Finite Set을 표현하기 좋음.
enum class State{
    IDLE, RUNNING, FINISHED
}
fun main(){
    val state = State.RUNNING
    val message = when(state){
        State.IDLE -> ""
        State.RUNNING -> ""
        State.FINISHED -> ""
    }
    // Enum 형식을 When 구문으로 사용할때는, Else를 컴파일러가 예측하므로 안써줘도 된다.
    println(message) 
}

// Enum 타입은 다른 클래스처럼 property(attribute)와 method를 가질 수 있다.
enum class Color(val rgb: Int){
    RED(0xFF0000),
    GREEN(0x00FF00),
    BLUE(0x0000FF),
    YELLOW(0xFFFF00);

    fun containsRed() = (this.rgb and 0xFF0000 != 0)
}

# Sealed Classes
// 상속의 사용을 제한할 수 있게한다. sealed를 선언하면 같은 패키지 내로부터 하위 클래스만 될 수 있다.
// sealed class가 선언된 패키지 외부로 부터 해당 클래스는 상속될 수 없다.
// 즉, 하위 클래스가 sealed class의 패키지 내에 있어야 상속받을 수 있다.
sealed class Mammal(val name : String)

class Cat(val catName: String) : Mammal(catName)
class Human(val humanName: String, val job : String) : Mammal(humanName)

fun greetMammal(mammal : Mammal) : String{
    when(mammal){
        is Human -> return ""
        is Cat -> return ""
    }
}

fun main(){
    println(greetMammal(Cat("Snowy")))
}

# Object Keyword
// Kotlin이 Singleton 패턴을 만족시키기 위해서, object를 선언한다. : no class, no constructor, only a lazy instance.
// 왜 lazy? 그 객체가 접근될 때 한번만 생성되고, 그렇지 않으면 생성 안되기 때문이다.

// object Expression(a = 머시기)
fun rentPrice(standardDays: Int, festivityDays: Int, specialDays: Int): Unit{
    val dayRates = object{
        var standard: Int = 30 * standardDays
        var festivity: Int = 50 * festivityDays
        var special: Int = 100 * specialDays
    }
    val total = dayRates.standard + dayRates.festivity + dayRates.special

    print("Total price: $$total")
}
fun main(){
    rentPrice(10, 2, 1) // 이때 실제로 object 객체가 생성된다.
}

// object Declaration (object{머시기} 형태)
// Expression이 아니라서(object = 머시기 형태), 변수 할당에 사용될 수 없다. 
// 이것을 직접적으로 이 object 멤버에 접근하기 위해 사용해야 한다.
object DoAuth{
    fun takeParams(username: String, password: String){
        println("")
    }
}
fun main(){
    DoAuth.takeParams("foo", "qwerty") // 이 시점에 object 생성
}

// Companion Objects
// 만약 클래스 내에서 object를 선언하고 싶다면, companion object로 선언하라. 이것은 자바의 "static"과 유사하다. 당신은 class 이름을 qualifier로서 사용하여 해당 object member를 사용할 수 있다.

