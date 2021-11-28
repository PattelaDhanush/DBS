package com.dbs.controller;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/receiver")
public class RecevierController {

	@GetMapping("{name}")
	public boolean isReceiverExists(@PathVariable String name) {
		String fileName="C:\\Users\\Administrator\\Downloads\\sdnlist.txt";
		
		try (Stream<String> stream = Files.lines(Paths.get(fileName))) {
	           List<String> list=stream.filter(lines -> (lines.toUpperCase()).contains(name.toUpperCase()))
	           .collect(Collectors.toList());
	        	   
	          if(list.size()>0)
	        	  return true;

	        } catch (IOException e) {
	            e.printStackTrace();
	        }
		return false;
	}
}
