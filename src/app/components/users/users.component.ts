import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: Array<any>

  constructor(
    private usersSvc: UsersService
  ) { }

  ngOnInit() {
    this.usersSvc.readAll().subscribe(res => {
      console.log(res)
      this.users = res.users
    })
  }

}
