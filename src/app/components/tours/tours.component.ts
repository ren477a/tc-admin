import { Component, OnInit } from '@angular/core';
import { ToursService } from '../../services/tours.service'

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.css']
})
export class ToursComponent implements OnInit {

  tours: Array<any>;
  pages: Array<Number>
  activePage: number;

  pendingTours: Array<any>

  constructor(
    private toursSvc: ToursService
  ) { 
    this.pages = Array(5).fill(1).map((x,i)=>i);
  }

  approveTours(id) {

  }

  saveNewTours() {

  }

  deleteTours(id) {

  }

  updateTours(id) {

  }

  ngOnInit() {
    this.activePage = 1
    this.fetchToursData()
    this.fetchPendingToursData()
  }

  toPage(page) {
    this.activePage = page
    this.fetchToursData()
  }

  previousPage() {    
    this.activePage--
    if(this.activePage<0) this.activePage = 0;
    this.fetchToursData()
  }

  nextPage() {
    this.activePage++
    if(this.activePage>=this.pages.length) this.activePage = this.pages.length;
    this.fetchToursData()
  }

  fetchToursData() {
    this.toursSvc.readAll(this.activePage).subscribe(res => {
      this.tours = res.tours
      this.pages = Array(res.totalPages).fill(1).map((x,i)=>i+1);
    })
  }

  fetchPendingToursData() {
    this.toursSvc.readPendingTours().subscribe(res => {
      this.pendingTours = res.tours
    })
  }

  isActivePage(i) {
    return i+1 === this.activePage
  }

}
