package com.wafflestudio.seminar.common

import org.aspectj.lang.JoinPoint
import org.aspectj.lang.annotation.Aspect
import org.aspectj.lang.annotation.Before
import org.slf4j.LoggerFactory
import org.springframework.stereotype.Component

/**
 * https://www.baeldung.com/spring-aop-pointcut-tutorial
 */
@Aspect
@Component
class SeminarLogger {
    private val logger = LoggerFactory.getLogger(javaClass)

    @Before("within(com.wafflestudio.seminar..*?????+)")
    fun doPublishEvent(jp: JoinPoint) {
        // TODO 어떤 요청이 들어왔는지 기록해보자.
        //  hint: ??? 부분을 수정해야 할 것 같다!
    }
}
