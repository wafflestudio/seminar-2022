package com.wafflestudio.seminar.lecture.service

import com.wafflestudio.seminar.lecture.database.LectureEntity
import com.wafflestudio.seminar.lecture.database.LectureRepository
import com.wafflestudio.seminar.user.database.UserRepository
import org.springframework.data.repository.findByIdOrNull
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional

@Service
class LectureService(
    private val userRepository: UserRepository,
    private val lectureRepository: LectureRepository,
) {
    @Transactional
    fun register(userId: Long) {
        // 유저 찾기
        val instructor = userRepository.findByIdOrNull(userId)!!
        // 세미나 1 등록
        lectureRepository.save(LectureEntity("어쩔강의", instructor))
        // 세미나 2 등록을 하려다가 에러!
        throw IllegalStateException()
    }
}