import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../../services/transactions.service'

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  transactions: Array<any>
  pages: Array<Number>
  activePage: number

  constructor(
    private transactionsSvc: TransactionsService
  ) { }

  ngOnInit() {
    this.fetchData()
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
    this.transactionsSvc.readAll().subscribe(res => {
      this.transactions = res
      console.log(res)
      //this.pages = Array(res.totalPages).fill(1).map((x,i)=>i+1);
    })
  }



  isActivePage(i) {
    return i+1 === this.activePage
  }

}
