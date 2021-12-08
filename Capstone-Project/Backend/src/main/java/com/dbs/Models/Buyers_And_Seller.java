package com.dbs.Models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@Data
@AllArgsConstructor
@Table(name="Buyers_And_Seller")
public class Buyers_And_Seller {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	@Column(name="client_id")
	private String client_id;
	
	@Column(name="instrument_id")
	private String instrument_id;
	
	@Column(name="quantity")
	private int quantity;
	
	@Column(name="price")
	private int price;

	
	@Column(name="type")
	private String type;
}
