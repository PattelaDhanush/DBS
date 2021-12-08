package com.dbs.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dbs.Models.Buyers_And_Seller;

@Repository
public interface Buyers_And_SellerRepository extends JpaRepository<Buyers_And_Seller, Integer>{

}
