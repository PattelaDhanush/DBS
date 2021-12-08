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
@Data
@Entity
@Table(name="custodian")
public class Custodian {
	@Id
	private String custodian_id;
	
	@Column(name="custodian_name")
	private String custodian_name;
}
