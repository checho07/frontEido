import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent  {

  constructor() { }

  @ViewChild('radio1')radio1 :ElementRef

  textoRetro:string = " hola"

  checkvalue(event){
    console.log(event.value);
  }
}
