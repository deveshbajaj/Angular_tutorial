import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  myip: string [ ];

  constructor(private http: HttpClient) { 
    this.http.get('assets/angular.json').subscribe(
      data => {
      this.myip =  data as string [];
      console.log('data',this.myip[1]);
       }
      )
  }
  ngOnInit() {    
  }
}
