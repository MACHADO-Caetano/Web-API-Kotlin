package com.example.kotlinproject.services

import com.example.kotlinproject.models.Message
import com.example.kotlinproject.repositories.MessageRepository
import org.springframework.data.repository.findByIdOrNull
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional

@Service
class MessageService(private val db: MessageRepository) {
    fun findMessages(): List<Message> = db.findAll().toList()

    fun findMessageById(id: Long): Message? = db.findByIdOrNull(id)
    @Transactional
    fun save(message: Message): Message{
        val messageSalved = db.save(message)
        return messageSalved
    }
}