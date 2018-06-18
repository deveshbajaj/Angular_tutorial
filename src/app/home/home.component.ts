import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  itemCount: number = 4;
  btnText: string = 'Add an Item';
  goalText: string = 'My first life goal'; 
  goals = [];
  constructor() { }

  ngOnInit() {
    this.itemCount = this.goals.length;
  }
  addItem() {
    this.goals.push(this.goalText);
    this.goalText = '';
    this.itemCount = this.goals.length;
  }

}
