import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Opportunity } from '../opportunity';
import { OpportunityService } from '../opportunity.service';

@Component({
  selector: 'app-create-opportunity',
  templateUrl: './create-opportunity.component.html',
  styleUrls: ['./create-opportunity.component.css']
})
export class CreateOpportunityComponent implements OnInit {

  opportunity: Opportunity = new Opportunity;

  flag = ("true" == localStorage.getItem("loggedin"));
  constructor(private opportunityService: OpportunityService,

    private router: Router) { }

  ngOnInit(): void {
  }

  
  saveOpportunity(){
    this.opportunityService.createOpportunity(this.opportunity).subscribe(data =>{
      console.log(data);
      this.goToOpportunityList();
    },
    error => console.log(error));
  }

 goToOpportunityList(){
this.router.navigate(['/opportunities']);
 }

  // onSubmit(){
  // console.log(this.opportunity);
  // this.saveOpportunity(); 
  // }
  onSubmit(){
    this.opportunity.hiringManager = localStorage.getItem("currentUser")!;
    console.log(localStorage.getItem('currentUser'));
    this.saveOpportunity();
  }

}
