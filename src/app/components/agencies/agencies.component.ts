import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agencies',
  templateUrl: './agencies.component.html',
  styleUrls: ['./agencies.component.css']
})
export class AgenciesComponent implements OnInit {

  agencies: Array<any>
  pages: Array<Number>
  activePage: number

  constructor() { }

  ngOnInit() {
  }

  approveAgency(id) {

  }

  saveNewAgency() {

  }

  deleteAgency(id) {

  }

  updateAgency(id) {

  }

  toPage(page) {
    this.activePage = page
    this.fetchAgenciesData()
  }

  previousPage() {    
    this.activePage--
    if(this.activePage<0) this.activePage = 0;
    this.fetchAgenciesData()
  }

  nextPage() {
    this.activePage++
    if(this.activePage>=this.pages.length) this.activePage = this.pages.length;
    this.fetchAgenciesData()
  }

  fetchAgenciesData() {
    // this.toursSvc.readAll(this.activePage).subscribe(res => {
    //   this.tours = res.tours
    //   this.pages = Array(res.totalPages).fill(1).map((x,i)=>i+1);
    // })
  }



  isActivePage(i) {
    return i+1 === this.activePage
  }

}
