package com.wafflestudio.seminar.core.lecture.database

import com.wafflestudio.seminar.common.BaseTimeEntity
import com.wafflestudio.seminar.core.user.database.UserEntity
import javax.persistence.Entity
import javax.persistence.FetchType
import javax.persistence.ManyToOne

@Entity
class LectureEntity(
    val title: String,
    @ManyToOne(fetch = FetchType.LAZY)
    val instructor: UserEntity,
) : BaseTimeEntity()