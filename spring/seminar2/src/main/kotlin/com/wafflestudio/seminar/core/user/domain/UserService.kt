package com.wafflestudio.seminar.core.user.domain

import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional
import java.util.*

interface UserService {
    fun getAllUsers(): List<User>
    fun getUser(id: Int): User
    fun createRandomUser()
}

@Service
class UserServiceImpl(
    private val userPort: UserPort,
) : UserService {

    override fun getAllUsers(): List<User> {
        return userPort.getAllUsers()
    }
    
    override fun getUser(id: Int): User {
        return userPort.getUser(id)
    }

    /**
     * 트랜잭션 어노테이션 여부에 따라 동작이 달라질까요?
     * 32번째 줄에 디버거를 찍고 동작을 확인해볼게요.
     */
    @Transactional
    override fun createRandomUser() {
        val newUser = userPort.createUser(
            User(
                name = UUID.randomUUID().toString().take(5),
                age = (1..100).random(),
                gender = User.Gender.values().random(),
            )
        )
        
        if (newUser.age % 2 == 0) {
            println("나이가 짝수면 커밋하지 않을거에요.")
            throw IllegalArgumentException()
        }
        
        println("나이가 홀수라 살아남았어요!")
    }
    
}