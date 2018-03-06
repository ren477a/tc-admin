import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  password: String
  msg: string

  constructor(
    private authSvc: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onLoginSubmit() {
    this.authSvc.login({password: this.password}).subscribe(data => {
      console.log(data)
  		if(data.success) {
			  this.authSvc.storeUserData(data.token, data.user);
  			console.log(data.msg);
  			this.router.navigate(['/']);
  		} else {
  			this.msg = data.msg;
  			this.router.navigate(['login']);
  		}
  	}, error => {
			this.msg = JSON.parse(error._body).err
		});
  }

}
