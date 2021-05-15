import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Action } from 'rxjs/internal/scheduler/Action';
import { Opportunity } from '../opportunity';
import { OpportunityService } from '../opportunity.service';

@Component({
  selector: 'app-update-opportunity',
  templateUrl: './update-opportunity.component.html',
  styleUrls: ['./update-opportunity.component.css']
})
export class UpdateOpportunityComponent implements OnInit {
  id: number;
  opportunity: Opportunity = new Opportunity;
  flag = ("true" == localStorage.getItem("loggedin"))
  constructor(private opportunityService: OpportunityService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.opportunityService.getOpportunityByID(this.id).subscribe(data => {
      this.opportunity = data;
    },error => console.log(error));
    
  }
  onSubmit(){
    this.opportunityService.updateOpportunity(this.id, this.opportunity).subscribe(data =>{
      this.goToOpportunityList();
    },error=>console.log(error));
    }
    goToOpportunityList(){
      this.router.navigate(['/opportunities']);
       }
}
