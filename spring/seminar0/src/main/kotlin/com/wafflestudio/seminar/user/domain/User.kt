package com.wafflestudio.seminar.user.domain

data class User(
    val name: String,
    val age: Int,
    val gender: Gender,
) {
    enum class Gender {
        MALE, FEMALE
    }
}
