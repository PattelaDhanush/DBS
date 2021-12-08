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
@Table(name="client")
public class Client {
	
	@Id
	private String client_id;
	
	@Column(name="client_name")
	private String client_name;
	
	@Column(name="custodian_id")
	private String custodian_id;
	
	@Column(name="transaction_limit")
	private double transaction_limit;
	
	@Column(name="buy_amount")
	private double buy_amount;
	
	@Column(name="sell_amount")
	private double sell_amount;
}
