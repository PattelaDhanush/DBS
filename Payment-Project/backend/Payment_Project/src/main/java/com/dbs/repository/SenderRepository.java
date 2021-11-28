package com.dbs.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dbs.models.Sender;

@Repository
public interface SenderRepository extends JpaRepository<Sender, Long> {

}
