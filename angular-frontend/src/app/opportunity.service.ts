import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Opportunity } from './opportunity';
@Injectable({
  providedIn: 'root'
})
export class OpportunityService {
  private baseURL = "http://localhost:8080/api/v1/opportunities";

  constructor(private httpClient: HttpClient) { }

  getOpportunitiesList(): Observable<Opportunity[]>{
    return this.httpClient.get<Opportunity[]>(`${this.baseURL}`);
  }

  createOpportunity(opportunity: Opportunity): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,opportunity);
  }

  getOpportunityByID(id: number): Observable<Opportunity>{
    return this.httpClient.get<Opportunity>(`${this.baseURL}/${id}`);
  }

  updateOpportunity(id: number,opportunity: Opportunity):Observable<object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,opportunity);
  }

  deleteOpportunity(id: number):Observable<object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
