import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../../services/reports.service'

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  private day: string;
  private month: string;
  private dUrl: string;
  private mUrl: string;
  isLoading1: boolean;
  button1: string;
  isLoading2: boolean;
  button2: string;

  constructor(
    private reportsSvc: ReportsService
  ) { }

  ngOnInit() {
    this.isLoading1 = false;
    this.button1 = "Generate daily sales report."
    this.isLoading2 = false;
    this.button2 = "Generate monthly sales report."
  }

  generateDailySalesReport() {
    this.isLoading1 = true;
    this.button1 = "Generating..."
    let date = new Date(Date.parse(this.day)).toISOString()
    console.log(date)
    this.reportsSvc.dailySales({day: date}).subscribe(res => {
      console.log(res)
      this.dUrl = res.url
      this.isLoading1 = false;
      this.button1 = "Generate daily sales report."
    })  
  }

  generateMonthlySalesReport() {
    this.isLoading2 = true;
    this.button2 = "Generating..."
    let date = new Date(Date.parse(this.month)).toISOString()
    console.log(date)
    this.reportsSvc.monthlySales({day: date}).subscribe(res => {
      console.log(res)
      this.mUrl = res.url
      this.isLoading2 = false;
      this.button2 = "Generate monthly sales report."
    })  
  }

}
