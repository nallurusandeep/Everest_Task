import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-sibiling1',
  templateUrl: './sibiling1.component.html',
  styleUrls: ['./sibiling1.component.css']
})
export class Sibiling1Component implements OnInit {
  showMe:boolean=true;
  hideMe:boolean=false;
  constructor(private sharedService:SharedService) { }

  ngOnInit(): void {
  }
clickMe(){
this.sharedService.sendClickEvent();
this.hideMe=!this.hideMe;
this.showMe=!this.showMe;
}
reduceMe(){
  this.showMe=!this.showMe;
  this.hideMe=!this.hideMe;
}
}
