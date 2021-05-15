import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { Opportunity } from '../opportunity';
import { OpportunityService } from '../opportunity.service';
import {HomeComponent} from '../home/home.component'
@Component({
  selector: 'app-opportunity-list',
  templateUrl: './opportunity-list.component.html',
  styleUrls: ['./opportunity-list.component.css']
})
export class OpportunityListComponent implements OnInit {

  opportunities : Opportunity[];
  popoverTitle = "Confirm";
  popoverMessage = "Are you sure you want to Delete?";
  flag = ("true" == localStorage.getItem("loggedin"))
  constructor(private opportunityService: OpportunityService,
    private router: Router) { }

  ngOnInit(): void {
    this.getOpportunities();
  }
  private getOpportunities(){
    this.opportunityService.getOpportunitiesList().subscribe(data =>{
      this.opportunities = data;
    })
  }

  opportunityDetails(id: number){
    this.router.navigate(['opportunity-details', id]);
  }

  updateOpportunity(id: number){
    this.router.navigate(['update-opportunity',id]);
  }

  deleteOpportunity(id: number){
    this.opportunityService.deleteOpportunity(id).subscribe(data => {
      this.getOpportunities();
    })
  }


}
