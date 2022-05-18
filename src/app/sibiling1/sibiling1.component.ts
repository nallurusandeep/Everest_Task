import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-sibiling1',
  templateUrl: './sibiling1.component.html',
  styleUrls: ['./sibiling1.component.css']
})
export class Sibiling1Component implements OnInit {

  constructor(private sharedService:SharedService) { }

  ngOnInit(): void {
  }
clickMe(){
this.sharedService.sendClickEvent();
}
}
