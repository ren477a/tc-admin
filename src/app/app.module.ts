import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AuthService } from './services/auth.service';
import { ToursService } from './services/tours.service';
import { AgenciesService } from './services/agencies.service';
import { CashoutsService } from './services/cashouts.service';
import { TransactionsService } from './services/transactions.service';
import { UsersService } from './services/users.service';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    AuthService,
    AgenciesService,
    CashoutsService,
    ToursService,
    TransactionsService,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
