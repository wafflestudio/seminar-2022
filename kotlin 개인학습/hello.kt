
//Variables

var a: String = "initial" // var은 변수 선언
val b: Int = 1 // val은 상수 선언
val c = 3 // Type 유추 가능

// Null Safety
// NullPointerException 방지를 위해, Kotlin은 null 할당을 금지함.
// null이 필요하다면 그것의 타입 뒤에 ?를 붙인다.
fun main(){
    var neverNull: String = "This can't be null" // Non-null String 선언
    neverNull = null // Non-Null Type에 대하여 null 배정 시 컴파일 오류 발생
    var nullable: String? = "You can keep a null here" //  nullable String 선언
    nullable = null // It's Ok
    var inferredNonNull = "The compiler assumes non-null" // Type이 String으로 추론된 경우, 기본적으로 non-null 설정
    inferredNonNull = null // 컴파일 오류

    fun strLength(notNull: String): Int{ // parameter로서 non-null String이라고 못 박음
        return notNull.length
    }
    strLength(neverNull) // non-null String에 대한 함수 호출은 가능
    strLength(nullable) // nullable (String?) 타입의 argument를 넣으려하면, 컴파일 오류 발생

    // Working With Nulls
    // 외부 자바코드나 없는 상태의 것을 나타내기 위해 null값을 사용할 일이 있는데,
    // Kotlin은 그런 상황을 잘 처라힐 수 있게 null tracking을 제공한다.
    fun describeString(maybeString: String?): String {
        if(maybeString != null && maybeString.length > 0){
            return "String of length ${maybeString.length}"
        }else{
            return "Empty or null string"
        }
    }
}

// Classes
class Customer  // 어떠한 생성자나 내부 특성에 대한 정의 없이 클래스 선언. non-parameterized default constructor가 알아서 생성된다.
class Contact(val id: Int, var email: String) // immutable id, mutable email을 속성값으로 갖는 클래스 선언. 두 개의 인자를 바탕으로하는 생성자 자동 생성
fun main(){
    val customer = Customer()
    val contact = Contact(1, "mary@gmail.com")

    println(contact.id)
    contact.email = "jane@gmail.com"
}

// Generics
// Generic class
class MutableStack<E>(vararg items: E){
    private val elements = items.toMutableList()
    fun push(element: E) = elements.add(element)
    fun peek(): E = elements.last()
    fun pop(): E = elements.removeAt(elements.size - 1)
    fun isEmpty() = elements.isEmpty()
    fun size() = elements.size
    override fun toString() = "MutableStack(${elements.joinToString()})"
}
// Generic Functions
fun <E> mutableStackOf(vararg elements: E) = MutableStack(*elements) // generic 구현에 굳이 타입을 명시하지 않아도 알아서 infer한다.

fun main(){
    val stack = mutableStackOf(0.62,3.14,2.7) 
    println(stack)
}

// Inheritance
open class Dog{ // 상속해주고 싶으면 open modifier로 class에 명시해야한다. default가 final이므로..!
    open fun sayHello(){ // 매서드도 마찬가지로 open
        println("wow wow!")
    }
}
class Yorkshire : Dog(){ // Dog() superclass를 상속."()"를 통해 default constructor로 받아와서 상속함.
    override fun sayHello(){
        println("wif wif!")
    }
}
fun main(){
    val dog: Dog = Yorkshire()
    dog.sayHello() // wif wif!
}
// Inheritance with Parameterized Constructor
open class Tiger(val origin: String){
    fun sayHello(){
        println("A tiger from $origin says: grrhhh!")
    }
}
class SiberianTiger : Tiger("Siberia")
fun main(){
    val tiger: Tiger = SiberianTiger()
    tiger.sayHello()
}

// Passing Constructor Arguments to Superclass
open class Lion(val name: String, val origin: String){
    fun sayHello(){
        println("$name, the lion from $origin says: graoh!")
    }
}
// name은 var도 아니고, val도 아니다. 이것은 Constructor Argument로서, 값이 superclass에 전달되는 녀석이라 그렇게 정의하지 않는다.
class Asiatic(name : String) : Lion(name= name, origin = "India")
fun main(){
    val lion : Lion = Asiatic("Rufo")
    lion.sayHello()
}
