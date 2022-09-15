package com.wafflestudio.seminar.controllers

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestHeader
import org.springframework.web.bind.annotation.RestController

@RestController
class SeminarController {
    
    @GetMapping("/user/me")
    fun userMe(
        @RequestHeader("MY-NAME") name: String,
    ): String {
        return "안녕하세요 $name 님 :)"        
    }
}