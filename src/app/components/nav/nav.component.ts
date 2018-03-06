import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(
    private router: Router,
    private authSvc: AuthService
  ) { }

  ngOnInit() {
    
  }

  onLogout(){
    this.authSvc.logout()
    this.router.navigate(['/login'])
  }

}
