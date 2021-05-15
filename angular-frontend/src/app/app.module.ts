import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OpportunityListComponent } from './opportunity-list/opportunity-list.component';
import { CreateOpportunityComponent } from './create-opportunity/create-opportunity.component';
import { FormsModule } from '@angular/forms';
import { UpdateOpportunityComponent } from './update-opportunity/update-opportunity.component';
import { OpportunityDetailsComponent } from './opportunity-details/opportunity-details.component';
import { HomeComponent } from './home/home.component';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';

@NgModule({
  declarations: [
    AppComponent,
    OpportunityListComponent,
    CreateOpportunityComponent,
    UpdateOpportunityComponent,
    OpportunityDetailsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SocialLoginModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger'})
    ]
,
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '180045441762-780pi2bj2a1a2le62s86fj0vo3facd11.apps.googleusercontent.com'
            )
          }
        ]
      } as SocialAuthServiceConfig,
    },HomeComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
