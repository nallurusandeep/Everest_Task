import { Component, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-sibiling2',
  templateUrl: './sibiling2.component.html',
  styleUrls: ['./sibiling2.component.css']
})
export class Sibiling2Component implements OnInit {
  constructor(private sharedService:SharedService) { 
 
}
  ngOnInit(): void {
  }
  @Input() online = 0;
  @Input() offline = 0;
  count:number=0;

}
