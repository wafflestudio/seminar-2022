package com.wafflestudio.seminar.core.user.database

import com.querydsl.jpa.impl.JPAQueryFactory
import com.wafflestudio.seminar.core.lecture.database.QLectureEntity.lectureEntity
import com.wafflestudio.seminar.core.user.database.QUserEntity.userEntity
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Component

interface UserRepository : JpaRepository<UserEntity, Long>, UserRepositoryCustom

interface UserRepositoryCustom

@Component
class UserRepositoryImpl(
    private val queryFactory: JPAQueryFactory,
): UserRepositoryCustom {

    /**
     * QueryDSL 과 함께 좀 더 친해져보아요
     */
    fun anything(): List<UserEntity> {
        return queryFactory
            .select(userEntity)
            .from(userEntity)
            .innerJoin(lectureEntity)
            .on(lectureEntity.instructor.eq(userEntity))
            .where(lectureEntity.title.eq("어쩔티비"))
            .fetch()
    }

}