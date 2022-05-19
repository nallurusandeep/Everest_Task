import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-sibiling1',
  templateUrl: './sibiling1.component.html',
  styleUrls: ['./sibiling1.component.css']
})
export class Sibiling1Component implements OnInit {
  showMe:boolean=true;
  hideMe:boolean=false;
  cards= [
    {img:"../assets/images/Everest.jpg",title:'Everest Technologies',desc:'Attended the interview, task is given by interviewer',button:"add",online:0},
    {img:"../assets/images/Everest.jpg",title:'Everest Technologies',desc:'Attended the interview, task is given by interviewer',button:"add",online:0},
    {img:"../assets/images/Everest.jpg",title:'Everest Technologies',desc:'Attended the interview, task is given by interviewer',button:"add",online:0},
    {img:"../assets/images/Everest.jpg",title:'Everest Technologies',desc:'Attended the interview, task is given by interviewer',button:"add",online:0},
    {img:"../assets/images/Everest.jpg",title:'Everest Technologies',desc:'Attended the interview, task is given by interviewer',button:"add",online:0},
    {img:"../assets/images/Everest.jpg",title:'Everest Technologies',desc:'Attended the interview, task is given by interviewer',button:"add",online:0},
    {img:"../assets/images/Everest.jpg",title:'Everest Technologies',desc:'Attended the interview, task is given by interviewer',button:"add",online:0},
    {img:"../assets/images/Everest.jpg",title:'Everest Technologies',desc:'Attended the interview, task is given by interviewer',button:"add",online:0},
    {img:"../assets/images/Everest.jpg",title:'Everest Technologies',desc:'Attended the interview, task is given by interviewer',button:"add",online:0}
  ];
  offline = this.cards.length;
  online = 0;
 
  constructor(private sharedService:SharedService) { }

  ngOnInit(): void {
  }
  public clickMe(i: any){
    if(!this.cards[i].online){
      this.cards[i].button = "reduce";
      this.cards[i].online = 1;
      this.offline -= 1;
      this.online +=  1;
    } else{
      this.cards[i].button = "add";
      this.cards[i].online = 0;
      this.offline += 1; 
      this.online -= 1;
    }
  }
}
