package com.wafflestudio.seminar.core.lecture.domain

import com.wafflestudio.seminar.core.user.domain.User

class Lecture(
    val title: String,
    val instructor: User,
)