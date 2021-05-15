package com.example.demo.model;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "opportunities")
public class Opportunity {
	

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	@Column(name= "Post")
	private String post;
	@Column(name = "Hiring_Manager")
	private String hiringManager;
	@Column(name = "Skills")
	private String skills;
	@Column(name = "Openings")
	private int openings;
	@Column(name = "Location")
	private String location;
	@Column(name = "Description")
	private String description;
	@Column(name = "EndDate")
	private Date  endDate;
	public Opportunity() {}
	public Opportunity(long id, String post, String hiringManager, String skills, int openings, String location,
			String description, Date endDate) {
		super();
		this.id = id;
		this.post = post;
		this.hiringManager = hiringManager;
		this.skills = skills;
		this.openings = openings;
		this.location = location;
		this.description = description;
		this.endDate = endDate;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getPost() {
		return post;
	}
	public void setPost(String post) {
		this.post = post;
	}
	public String getHiringManager() {
		return hiringManager;
	}
	public void setHiringManager(String hiringManager) {
		this.hiringManager = hiringManager;
	}
	public String getSkills() {
		return skills;
	}
	public void setSkills(String skills) {
		this.skills = skills;
	}
	public int getOpenings() {
		return openings;
	}
	public void setOpenings(int openings) {
		this.openings = openings;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Date getEndDate() {
		return endDate;
	}
	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}
	
	
}
