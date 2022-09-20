package com.wafflestudio.seminar.user.api

import com.wafflestudio.seminar.user.domain.User
import com.wafflestudio.seminar.user.domain.UserService
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController

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
}