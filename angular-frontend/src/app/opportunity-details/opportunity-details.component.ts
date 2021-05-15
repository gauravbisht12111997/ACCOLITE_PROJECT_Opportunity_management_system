import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Opportunity } from '../opportunity';
import { OpportunityService } from '../opportunity.service';

@Component({
  selector: 'app-opportunity-details',
  templateUrl: './opportunity-details.component.html',
  styleUrls: ['./opportunity-details.component.css']
})
export class OpportunityDetailsComponent implements OnInit {

  flag = ("true" == localStorage.getItem("loggedin"))
  id: number;
  opportunity: Opportunity = new Opportunity();
  constructor(private route: ActivatedRoute, private oppotunityService: OpportunityService) { }

  ngOnInit(): void {
  this.id = this.route.snapshot.params['id'];
  this.opportunity=new Opportunity();
  this.oppotunityService.getOpportunityByID(this.id).subscribe(data => {
    this.opportunity = data;
  })
  }

}
