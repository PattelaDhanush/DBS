package com.dbs.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dbs.Models.Instrument;

@Repository
public interface InstrumentRepository extends JpaRepository<Instrument, String>{

}
