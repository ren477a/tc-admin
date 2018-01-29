import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  transactions: Array<any>
  pages: Array<Number>
  activePage: number

  constructor() { }

  ngOnInit() {
  }

  deleteTransaction(id) {

  }

  updateTransaction(id) {

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
