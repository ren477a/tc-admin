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
    this.usersSvc.readAll().subscribe(res => {
      console.log(res)
      this.users = res.users
    })
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
    if(this.activePage<0) this.activePage = 0;
    this.fetchData()
  }

  nextPage() {
    this.activePage++
    if(this.activePage>=this.pages.length) this.activePage = this.pages.length;
    this.fetchData()
  }

  fetchData() {
    // this.toursSvc.readAll(this.activePage).subscribe(res => {
    //   this.tours = res.tours
    //   this.pages = Array(res.totalPages).fill(1).map((x,i)=>i+1);
    // })
  }



  isActivePage(i) {
    return i+1 === this.activePage
  }

}
