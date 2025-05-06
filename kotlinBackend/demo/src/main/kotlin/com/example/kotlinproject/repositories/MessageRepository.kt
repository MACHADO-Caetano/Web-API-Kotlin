package com.example.kotlinproject.repositories

import com.example.kotlinproject.models.Message
import org.springframework.data.repository.CrudRepository

interface MessageRepository : CrudRepository<Message, Long>