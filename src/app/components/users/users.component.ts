import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: Array<any>
  pages: Array<Number>
  activePage: number

  constructor(
    private usersSvc: UsersService
  ) { }

  ngOnInit() {
    this.pages = []
    this.activePage = 1
    this.fetchData()
  }

  saveNewUser() {

  }

  deleteUser(id) {

  }

  updateUser(id) {

  }

  toPage(page) {
    this.activePage = page
    this.fetchData()
  }

  previousPage() {    
    this.activePage--
    if(this.activePage<=0) this.activePage = 1;
    this.fetchData()
  }

  nextPage() {
    this.activePage++
    if(this.activePage>=this.pages.length) this.activePage = this.pages.length;
    this.fetchData()
  }

  fetchData() {
    this.usersSvc.readAll(this.activePage).subscribe(res => {
      this.users = res.users
      this.pages = Array(res.totalPages).fill(1).map((x,i)=>i+1);
    })
  }



  isActivePage(i) {
    return i+1 === this.activePage
  }

}
