import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'

import { AuthService } from './services/auth.service';
import { ToursService } from './services/tours.service';
import { AgenciesService } from './services/agencies.service';
import { CashoutsService } from './services/cashouts.service';
import { TransactionsService } from './services/transactions.service';
import { UsersService } from './services/users.service';
import { ValidateService } from './services/validate.service';
import { ReportsService } from './services/reports.service';
import { GuardService } from './services/guard.service';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { UsersComponent } from './components/users/users.component';
import { AgenciesComponent } from './components/agencies/agencies.component';
import { ToursComponent } from './components/tours/tours.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { CashoutsComponent } from './components/cashouts/cashouts.component';
import { ApprovegencyComponent } from './components/approvegency/approvegency.component';
import { ApprovetourComponent } from './components/approvetour/approvetour.component';
import { ProcessComponent } from './components/process/process.component';
import { HttpClient } from '@angular/common/http/src/client';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ReportsComponent } from './components/reports/reports.component';
import { LoginComponent } from './components/login/login.component';

const appRoutes: Routes = [
  { path: '', component: UsersComponent, canActivate: [GuardService]},
  { path: 'tours', component: ToursComponent, canActivate: [GuardService]},
  { path: 'agencies', component: AgenciesComponent, canActivate: [GuardService]},
  { path: 'users', component: UsersComponent, canActivate: [GuardService]},
  { path: 'transactions', component: TransactionsComponent, canActivate: [GuardService]},
  { path: 'cashouts', component: CashoutsComponent, canActivate: [GuardService]},
  { path: 'reports', component: ReportsComponent, canActivate: [GuardService]},
  { path: 'login', component: LoginComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    UsersComponent,
    AgenciesComponent,
    ToursComponent,
    TransactionsComponent,
    CashoutsComponent,
    ApprovegencyComponent,
    ApprovetourComponent,
    ProcessComponent,
    DashboardComponent,
    ReportsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [
    AuthService,
    AgenciesService,
    CashoutsService,
    ToursService,
    TransactionsService,
    UsersService,
    ValidateService,
    ReportsService,
    GuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
