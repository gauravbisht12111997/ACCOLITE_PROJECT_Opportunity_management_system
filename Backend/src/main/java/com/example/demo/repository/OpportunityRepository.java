package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Opportunity;

@Repository
public interface OpportunityRepository extends JpaRepository<Opportunity, Long>{
}
