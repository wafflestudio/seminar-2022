package com.wafflestudio.seminar.lecture.api

import com.wafflestudio.seminar.lecture.service.LectureService
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController

@RestController
class LectureController(
    private val lectureService: LectureService,
) {
    @PostMapping("/api/v1/lecture")
    fun a(
        @RequestBody req: Request
    ) {
        lectureService.register(req.userId)
    }

    data class Request(val userId: Long)
}