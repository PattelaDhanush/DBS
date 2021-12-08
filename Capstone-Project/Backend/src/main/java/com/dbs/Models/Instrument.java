package com.dbs.Models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Entity
@Data
@Table(name="instrument")
public class Instrument {
	
	@Id
	private String instrument_id;
	
	@Column(name="instrument_name")
	private String instrument_name;
	
	@Column(name="face")
	private double face;
	
	@Column(name="expiry")
	private String expiry; 
}
