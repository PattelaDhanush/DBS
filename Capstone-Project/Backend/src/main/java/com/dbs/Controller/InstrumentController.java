package com.dbs.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dbs.Exception.TransferException;
import com.dbs.Models.Instrument;
import com.dbs.Repository.InstrumentRepository;

@CrossOrigin("*")
@RestController
@RequestMapping("/instrument")
public class InstrumentController {
	
	public final InstrumentRepository instrument_repo;
	
	@Autowired
	public InstrumentController(InstrumentRepository instrument_repo) {
		this.instrument_repo=instrument_repo;
	}
	
	@GetMapping
	public List<Instrument> getAllInstruments(){
		return instrument_repo.findAll();
	}
	
	@GetMapping("{id}")
	public Instrument getInstrumentById(@PathVariable String id){
		 Instrument instrument=instrument_repo.findById(id)
				 		.orElseThrow(()->new TransferException("No instrument Found"));
		 return instrument;

	}

}
