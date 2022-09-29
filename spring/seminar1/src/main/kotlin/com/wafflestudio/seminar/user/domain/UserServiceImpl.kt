package com.wafflestudio.seminar.user.domain

import org.springframework.stereotype.Service

@Service
class UserServiceImpl(
    private val userPort: UserPort,
) : UserService {
    override fun getUser(id: Int): User {
        return userPort.getUser(id)
    }
}