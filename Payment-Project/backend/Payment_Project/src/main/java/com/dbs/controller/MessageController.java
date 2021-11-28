package com.dbs.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dbs.Exception.ResourceNotFound;
import com.dbs.models.Message;
import com.dbs.repository.MessageRepository;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/message")
public class MessageController {
	
	public final MessageRepository message_repo;
	
	@Autowired
	public MessageController(MessageRepository message_repo) {
		this.message_repo=message_repo;
	}
	
	@GetMapping
	public List<Message> getAllMessages(){
		return message_repo.findAll();
	}
	
	@GetMapping("{msg}")
	public Message getMessageById(@PathVariable String msg){
		Message message=message_repo.findById(msg)
						.orElseThrow(()-> new ResourceNotFound("Message Not Present"));
		return message;
	}
	
}
