package com.dbs.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dbs.Exception.ResourceNotFound;
import com.dbs.models.Bank;
import com.dbs.repository.BankRepository;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/bank")
public class BankController {
	
	public final BankRepository bank_repo;
	
	@Autowired
	public BankController(BankRepository bank_repo) {
		this.bank_repo=bank_repo;
	}
	
	@GetMapping
	public List<Bank> getAllBanks(){
		return bank_repo.findAll();
	}
	
	@GetMapping("{bic}")
	public Bank getAllBanksByBic(@PathVariable String bic){
		Bank bank= bank_repo.findById(bic)
					.orElseThrow(()->new ResourceNotFound("Bank Not Found"));
		return bank;
	}
}
