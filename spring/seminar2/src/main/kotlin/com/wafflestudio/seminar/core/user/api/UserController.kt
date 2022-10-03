package com.wafflestudio.seminar.core.user.api

import com.wafflestudio.seminar.core.user.domain.User
import com.wafflestudio.seminar.core.user.domain.UserService
import org.springframework.boot.context.event.ApplicationStartedEvent
import org.springframework.context.event.EventListener
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController
import javax.annotation.PostConstruct

@RestController
@RequestMapping("/user")
class UserController(
    private val userService: UserService,
) {
    @GetMapping
    fun getUser(
        @RequestParam userId: Int,
    ): User {
        return userService.getUser(userId)
    }

    /**
     * 트랜잭션의 작동을 확인하기 위해, 부팅 시에 10명의 랜덤 유저를 만들어볼게요.
     * 트랜잭션은 AOP 방식으로 동작해요. 따라서 다른 컴포넌트에서 함수를 호출할 때에만 동작해요.
     */
    @EventListener(ApplicationStartedEvent::class)
    fun createRandomUser() {
        (1..10).forEach { _ ->
            try {
                userService.createRandomUser()
            } catch (e: Exception) {
                // Do Nothing On Exception
            }
        }
        
        println("살아남은 유저들: ${userService.getAllUsers()}")
    }
}