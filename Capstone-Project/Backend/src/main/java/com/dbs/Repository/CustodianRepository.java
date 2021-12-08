package com.dbs.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dbs.Models.Custodian;

@Repository
public interface CustodianRepository extends JpaRepository<Custodian, String>{

}
