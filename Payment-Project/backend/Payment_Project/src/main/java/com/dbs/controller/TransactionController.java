package com.dbs.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dbs.Exception.ResourceNotFound;
import com.dbs.models.Transaction;
import com.dbs.repository.TransactionRepository;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/transaction")
public class TransactionController {
	
	public final TransactionRepository trans_repo;
	
	@Autowired
	public TransactionController(TransactionRepository trans_repo) {
		this.trans_repo=trans_repo;
	}
	
	@GetMapping
	public List<Transaction> getAllTransaction(){
		return trans_repo.findAll();
	}
	
	@PostMapping
	public Transaction createTransaction(@RequestBody Transaction transaction) {
		return trans_repo.save(transaction);
	}
	
	@GetMapping("{transaction_Id}")
	public Transaction getAllTransactionById(@PathVariable long transaction_Id){
		Transaction transaction=trans_repo.findById(transaction_Id)
								.orElseThrow(()-> new ResourceNotFound("Transaction Not Found"));
		return transaction;
	}
	
}
