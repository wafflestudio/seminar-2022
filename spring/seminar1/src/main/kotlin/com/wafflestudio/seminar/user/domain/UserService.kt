package com.wafflestudio.seminar.user.domain

interface UserService {
    fun getUser(id: Int): User
}