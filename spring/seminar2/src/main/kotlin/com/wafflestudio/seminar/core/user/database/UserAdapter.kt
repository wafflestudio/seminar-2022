package com.wafflestudio.seminar.core.user.database

import com.wafflestudio.seminar.core.user.domain.User
import com.wafflestudio.seminar.core.user.domain.UserPort
import org.springframework.data.repository.findByIdOrNull
import org.springframework.stereotype.Component

@Component
class UserAdapter(
    private val userRepository: UserRepository,
) : UserPort {
    override fun getAllUsers(): List<User> {
        return userRepository.findAll().map { it.toUser() }
    }
    
    override fun getUser(id: Int): User {
        val entity = userRepository.findByIdOrNull(id.toLong()) ?: throw IllegalArgumentException("USER#$id NOT FOUND!")
        return entity.toUser()
    }

    override fun createUser(user: User): User {
        return userRepository.save(UserEntity(user.name, user.age, user.gender)).toUser()
    }
}