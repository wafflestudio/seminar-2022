package com.wafflestudio.seminar.user.database

import com.wafflestudio.seminar.user.domain.User
import com.wafflestudio.seminar.user.domain.UserPort
import org.springframework.stereotype.Component

@Component
class UserAdapter: UserPort {
    private val users = (1..100)
        .map { age -> User("USER#$age", age, User.Gender.values().random()) }
        .associateBy { user -> user.age }
    
    override fun getUser(id: Int): User {
        return users[id] ?: throw IllegalArgumentException("USER#$id NOT FOUND!")
    }
}