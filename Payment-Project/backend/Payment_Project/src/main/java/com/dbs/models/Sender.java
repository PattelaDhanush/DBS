package com.dbs.models;

import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;


@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="sender")
public class Sender {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long sender_id;
	
	@Column(name="name")
	private String name;
	
	@Column(name="clear_balance")
	private double clear_balance;
	
	@Column(name="overdraft")
	private String overdraft;

	public String getName() {
		// TODO Auto-generated method stub
		return name;
	}

	public long getSender_id() {
		return sender_id;
	}

	public void setSender_id(long sender_id) {
		this.sender_id = sender_id;
	}

	public double getClear_balance() {
		return clear_balance;
	}

	public void setClear_balance(double clear_balance) {
		this.clear_balance = clear_balance;
	}

	public String getOverdraft() {
		return overdraft;
	}

	public void setOverdraft(String overdraft) {
		this.overdraft = overdraft;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Override
	public String toString() {
		return "Sender [sender_id=" + sender_id + ", name=" + name + ", clear_balance=" + clear_balance + ", overdraft="
				+ overdraft + "]";
	}
}
