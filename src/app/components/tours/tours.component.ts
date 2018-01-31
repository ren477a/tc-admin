import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ToursService } from '../../services/tours.service'
import { ValidateService } from '../../services/validate.service';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.css']
})
export class ToursComponent implements OnInit {
  @ViewChild('btnAddTour') btnAddTour: ElementRef;

  tours: Array<any>;
  pages: Array<Number>
  activePage: number;
  selectedTour: any

  pendingTours: Array<any>

  title: String;
  agency: String;
  description: String;
  duration: String;
  type: String;
  itinerary: String;
  inclusions: String;
  exclusions: String;
  terms: String;
  validityInDays: String;
  price: String;

  photo: File;
  msg: String;

  constructor(
    private toursSvc: ToursService,
    private validateSvc: ValidateService
  ) { 
    this.pages = Array(5).fill(1).map((x,i)=>i);
  }

  approveTour(id) {
    console.log("Approve " + id)
    this.toursSvc.approve(id).subscribe(res => {
      this.fetchPendingToursData()
    })
  }

  denyTour(id) {
    console.log("Deny " + id)
    this.toursSvc.deny(id).subscribe(res => {
      this.fetchPendingToursData()
    })
  }

  onClickAddTour() {
    //TODO validation
    const tour = {
      title: this.title,
      agency: this.agency,
      description: this.description,
      duration: +this.duration,
      type: this.type,
      itinerary: this.itinerary,
      inclusions: this.inclusions,
      exclusions: this.exclusions,
      terms: this.terms,
      validityInDays: +this.validityInDays,
      price: +this.price,
      img: ''
    }
    console.log(tour)
    let valid = this.validateSvc.validateTour(tour);
    if (valid != "success") {
      this.msg = valid;
      return;
    }
    if (this.photo) {
      this.toursSvc.uploadPhoto(this.photo).subscribe(res => {
        console.log(res.msg);
        if (res.file) {
          tour.img = res.file;

          console.log(tour.img);
          this.toursSvc.addTour(tour).subscribe(data => {
            if (data.tour) {
              console.log("Submit success");
              this.clearData();
              this.fetchToursData();
              this.fetchPendingToursData();
              setTimeout(() => {
                this.btnAddTour.nativeElement.click();
              }, 1000);
              //this.showSuccess('You added a new tour.');
            } else {
              this.msg = "Something went wrong."
            }
          });
        }
      });
    } else {
      this.msg = 'Please add a photo.'
    }
  }

  deleteTour(tour) {
    console.log("Delete " + tour._id)
    this.toursSvc.delete(tour._id).subscribe(res => {
      this.fetchToursData()
    })

  }

  updateTours(id) {

  }

  ngOnInit() {
    this.pages = []
    this.activePage = 1
    this.fetchToursData()
    this.fetchPendingToursData()
  }

  select(tour) {
    this.selectedTour = tour
  }

  toPage(page) {
    this.activePage = page
    this.fetchToursData()
  }

  previousPage() {    
    this.activePage--
    if(this.activePage<=0) this.activePage = 1;
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

  clearData() {
    this.title = "";
    this.agency = "";
    this.description = "";
    this.duration = "";
    this.type = "";
    this.itinerary = "";
    this.inclusions = "";
    this.exclusions = "";
    this.terms = "";
    this.validityInDays = "";
    this.price = "";
  }

  getFiles(event) {
    this.photo = event.target.files[0];
  }

}
