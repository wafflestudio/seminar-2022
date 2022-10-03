package com.wafflestudio.seminar.cglib

import org.springframework.cglib.proxy.Enhancer
import org.springframework.cglib.proxy.InvocationHandler
import java.lang.reflect.Method

open class SomeBusinessLogicService {
    open fun execute() = println("어떤 클래스에서 작업이 일어났어요.")
}

class CGlibAmplifier(private val target: SomeBusinessLogicService): InvocationHandler {
    override fun invoke(proxy: Any?, method: Method?, args: Array<out Any>?) =
        (1..3)
            .apply { println("작업을 3배로 처리할게요.") }
            .forEach { _ -> target.execute() }
            .apply { println("작업이 3배로 처리되었어요.") }
}

fun main() {
    val target = SomeBusinessLogicService()

    val resultProxy = Enhancer.create(
        SomeBusinessLogicService::class.java,
        CGlibAmplifier(target),
    )

    (resultProxy as SomeBusinessLogicService).execute()
}
