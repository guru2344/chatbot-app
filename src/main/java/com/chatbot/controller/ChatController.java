package com.chatbot.controller;

import com.chatbot.service.GroqService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/chat")
@CrossOrigin("*")
public class ChatController {

    @Autowired
    private GroqService service;

    @PostMapping
    public String chat(@RequestBody String message) {
        return service.getResponse(message);
    }
}