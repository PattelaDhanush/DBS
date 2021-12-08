package com.dbs.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dbs.Exception.TransferException;
import com.dbs.Models.Custodian;
import com.dbs.Repository.CustodianRepository;

@RestController
@CrossOrigin("*")
@RequestMapping("/custodian")
public class CustodianController {
	
	public final CustodianRepository custodian_repo;
	
	@Autowired
	public CustodianController(CustodianRepository custodian_repo) {
		this.custodian_repo=custodian_repo;
	}
	
	@GetMapping
	public List<Custodian> getAllCustodian(){
		return custodian_repo.findAll();
	}
	
	@GetMapping("{id}")
	public Custodian getCustodianById(@PathVariable String id) {
		Custodian custodian = custodian_repo.findById(id)
								.orElseThrow(()-> new TransferException("Custodian Not Found"));
		return custodian;
	}
	

}
