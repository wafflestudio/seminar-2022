package com.wafflestudio.seminar.user.database

import com.wafflestudio.seminar.user.domain.User
import org.springframework.boot.context.event.ApplicationStartedEvent
import org.springframework.context.event.EventListener
import org.springframework.jdbc.core.JdbcTemplate
import org.springframework.jdbc.core.RowMapper
import org.springframework.stereotype.Component

@Component
class UserJdbcRepository(
    private val userRepository: UserRepository,
    private val jdbcTemplate: JdbcTemplate,
) {
    private val userRowMapper = RowMapper<UserEntity> { resultSet, _ ->
        UserEntity(
            name = resultSet.getString("name"),
            age = resultSet.getString("age").toInt(),
            gender = resultSet.getString("gender").let(User.Gender::valueOf)
        )
    }

    @EventListener(ApplicationStartedEvent::class)
    fun example() {
        userRepository.save(UserEntity("강지혁", 100, User.Gender.MALE))
        println(jdbcTemplate.queryForObject("SELECT * FROM USERS WHERE id = ?", userRowMapper, 1L)!!.toUser())
    }

}