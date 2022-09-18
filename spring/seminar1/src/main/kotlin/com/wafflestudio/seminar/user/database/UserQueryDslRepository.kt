package com.wafflestudio.seminar.user.database

import com.querydsl.jpa.impl.JPAQueryFactory
import com.wafflestudio.seminar.user.database.QUserEntity.userEntity
import org.springframework.stereotype.Component

@Component
class UserQueryDslRepository(
    private val queryFactory: JPAQueryFactory,
) {
    fun example() =
        queryFactory
            .select(userEntity)
            .from(userEntity)
            .fetch()
}