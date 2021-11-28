package com.dbs.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dbs.Exception.ResourceNotFound;
import com.dbs.models.Sender;
import com.dbs.repository.SenderRepository;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/sender")
public class SenderController {
	private final SenderRepository sender_repo;
	
	@Autowired
	public SenderController(SenderRepository sender_repo){
		this.sender_repo=sender_repo;
	}
	
	@GetMapping
	public List<Sender> getAllSenderInfo(){
		return sender_repo.findAll();
	}
	
    @GetMapping("{id}")
    public Sender getSenderById(@PathVariable long id){
        Sender sender=sender_repo.findById(id)
        		.orElseThrow(()->new ResourceNotFound("Sender Doesn't Exists with given id:"+id));
        return sender;
    }
    
    @PutMapping("{sender_Id}")
    public boolean updateSenderDetails(@PathVariable long sender_Id, @RequestBody Sender sender1) {
    	Sender sender=sender_repo.findById(sender_Id)
    				.orElseThrow(()-> new ResourceNotFound("Sender not found with id: "+sender_Id));
    	sender.setClear_balance(sender1.getClear_balance());
    	sender_repo.save(sender);
    	return true;
    }
    
}
