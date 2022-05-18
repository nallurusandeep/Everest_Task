import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-sibiling2',
  templateUrl: './sibiling2.component.html',
  styleUrls: ['./sibiling2.component.css']
})
export class Sibiling2Component implements OnInit {
clickEventSubscription:Subscription;
  constructor(private sharedService:SharedService) { 
  this.clickEventSubscription=this.sharedService.getClickEvent().subscribe(()=>{
    this.incrementCount();
  })
}
  ngOnInit(): void {
  }
  count:number=0;
incrementCount(){
this.count++;
}
countminus=0;
}
