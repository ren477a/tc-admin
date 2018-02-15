import { Component, OnInit } from '@angular/core';
import { CashoutsService } from '../../services/cashouts.service'

@Component({
  selector: 'app-cashouts',
  templateUrl: './cashouts.component.html',
  styleUrls: ['./cashouts.component.css']
})
export class CashoutsComponent implements OnInit {

  cashouts: Array<any>
  pendingCashouts: Array<any>
  pages: Array<Number>
  activePage: number

  selectedCashout: any

  constructor(
    private cashoutsSvc: CashoutsService
  ) { }

  ngOnInit() {
    this.pages = []
    this.activePage = 1
    this.fetchData()
    this.fetchPending()
  }

  deleteCashout(id) {

  }

  process(cashout) {
    this.cashoutsSvc.process(cashout._id, '').subscribe(res => {
      // show success
      this.fetchPending()
      this.fetchData()
    })
  }

  select(cashout) {
    this.selectedCashout = cashout
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
    this.cashoutsSvc.readAll(this.activePage).subscribe(res => {
      console.log(res)
      this.cashouts = res.cashout
      console.log(this.cashouts)
      this.pages = Array(res.totalPages).fill(1).map((x,i)=>i+1);
    })
  }

  fetchPending() {
    this.cashoutsSvc.readPending().subscribe(res => {
      this.pendingCashouts = res.cashout
    })
  }



  isActivePage(i) {
    return i+1 === this.activePage
  }

}
