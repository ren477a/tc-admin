import { Component, OnInit } from '@angular/core';
import { AgenciesService } from '../../services/agencies.service'

@Component({
  selector: 'app-agencies',
  templateUrl: './agencies.component.html',
  styleUrls: ['./agencies.component.css']
})
export class AgenciesComponent implements OnInit {

  agencies: Array<any>
  pendingAgencies: Array<any>
  pages: Array<Number>
  activePage: number

  constructor(
    private agenciesSvc: AgenciesService
  ) { }

  ngOnInit() {
    this.pages = []
    this.activePage = 1
    this.fetchAgenciesData()
    this.fetchPendingAgenciesData()
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
    if(this.activePage<=0) this.activePage = 1;
    this.fetchAgenciesData()
  }

  nextPage() {
    this.activePage++
    if(this.activePage>=this.pages.length) this.activePage = this.pages.length;
    this.fetchAgenciesData()
  }

  fetchAgenciesData() {
    this.agenciesSvc.readAll(this.activePage).subscribe(res => {
      this.agencies = res.agency
      console.log(this.agencies)
      this.pages = Array(res.totalPages).fill(1).map((x,i)=>i+1);
    })
  }

  fetchPendingAgenciesData() {
    this.agenciesSvc.readPending().subscribe(res => {
      this.pendingAgencies = res.agency
      console.log(this.pendingAgencies)
      this.pages = Array(res.totalPages).fill(1).map((x,i)=>i+1);
    })
  }



  isActivePage(i) {
    return i+1 === this.activePage
  }

}
