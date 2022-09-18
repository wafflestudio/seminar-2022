package com.wafflestudio.seminar.lecture.domain

import com.wafflestudio.seminar.user.domain.User

class Lecture(
    val title: String,
    val instructor: User,
)