import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SrviceService } from './srvice.service';
import{switchMap} from 'rxjs/Operators'
import {Subscription,timer} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  data;
  relt;
  st:any;
   subscription : Subscription
  constructor(private h:HttpClient,private s:SrviceService){}
  ngOnInit()
  {
    this.subscription=timer(0,10000).pipe(switchMap(()=>this.s.my())).subscribe(respp=>
      {
        console.log(respp)
        this.data=respp
        this.relt=this.data.hits
      }
      );
    
      
  
  }

  submit(ee)
  {
    this.st=ee;
  }
}
