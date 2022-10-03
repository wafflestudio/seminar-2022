package com.wafflestudio.seminar.core.user.domain

interface UserPort {
    fun getAllUsers(): List<User>
    fun getUser(id: Int): User
    fun createUser(user: User): User
}