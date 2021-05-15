import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateOpportunityComponent } from './create-opportunity/create-opportunity.component';
import { OpportunityDetailsComponent } from './opportunity-details/opportunity-details.component';
import { OpportunityListComponent } from './opportunity-list/opportunity-list.component';
import { UpdateOpportunityComponent } from './update-opportunity/update-opportunity.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'opportunities', component: OpportunityListComponent},
  {path: 'create-opportunity', component: CreateOpportunityComponent},
  {path: 'update-opportunity/:id', component: UpdateOpportunityComponent},
  {path: 'opportunity-details/:id', component: OpportunityDetailsComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
