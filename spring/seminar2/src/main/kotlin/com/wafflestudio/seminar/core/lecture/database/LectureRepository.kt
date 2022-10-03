package com.wafflestudio.seminar.core.lecture.database

import org.springframework.data.jpa.repository.JpaRepository

interface LectureRepository : JpaRepository<LectureEntity, Long>