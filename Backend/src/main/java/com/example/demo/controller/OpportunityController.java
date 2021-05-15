package com.example.demo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.Opportunity;
import com.example.demo.repository.OpportunityRepository;

@RestController
@RequestMapping("/api/v1/")
public class OpportunityController {
	
	@Autowired
	private OpportunityRepository opportunityRepository;
	
	//get all opportunities
	@GetMapping("/opportunities")
	@CrossOrigin
	public List<Opportunity> getAllOpportunities(){
		return opportunityRepository.findAll();
	}
	
	//create opportunity rest api
	@PostMapping("/opportunities")
	@CrossOrigin
	public Opportunity createOpportunity(@RequestBody Opportunity opportunity){
		return opportunityRepository.save(opportunity); 
	}
	//get opportunity by id rest api
		@GetMapping("/opportunities/{id}")
		@CrossOrigin
		public ResponseEntity<Opportunity> getOpportunityById(@PathVariable Long id) {
			Opportunity opportunity = opportunityRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Opportunity not found with id: " + id));
			return ResponseEntity.ok(opportunity);
	}
	
	//update opportunity rest api
		@PutMapping("/opportunities/{id}")
		@CrossOrigin
		public ResponseEntity<Opportunity> updateOpportunity(@PathVariable Long id,@RequestBody Opportunity newopportunity){
		
			Opportunity opportunity = opportunityRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Opportunity not found with id: " + id));
		
		
			opportunity.setDescription(newopportunity.getDescription());
			opportunity.setPost(newopportunity.getPost());
			opportunity.setEndDate(newopportunity.getEndDate());
			opportunity.setHiringManager(newopportunity.getHiringManager());
			opportunity.setId(newopportunity.getId());
			opportunity.setLocation(newopportunity.getLocation());
			opportunity.setOpenings(newopportunity.getOpenings());
			opportunity.setSkills(newopportunity.getSkills());
			
			Opportunity updatedOppotunity = opportunityRepository.save(opportunity);
			return ResponseEntity.ok(updatedOppotunity);
			
			
	}
	//delete opportunity rest api
		@DeleteMapping("/opportunities/{id}")
		@CrossOrigin
		public ResponseEntity<Map<String, Boolean>> deleteOpportunity(@PathVariable Long id){
			Opportunity opportunity = opportunityRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Opportunity not found with id: " + id));
			opportunityRepository.delete(opportunity);
			Map<String, Boolean> response = new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			return ResponseEntity.ok(response);
		}
		
}
