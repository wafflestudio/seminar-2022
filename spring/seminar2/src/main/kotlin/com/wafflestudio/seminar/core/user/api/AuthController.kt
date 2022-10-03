package com.wafflestudio.seminar.core.user.api

import com.wafflestudio.seminar.core.user.domain.User
import com.wafflestudio.seminar.core.user.domain.UserService
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/auth")
class AuthController(
    private val userService: UserService,
) {
    @GetMapping
    fun getUser(
        @RequestParam userId: Int,
    ): User {
        return userService.getUser(userId)
    }
}