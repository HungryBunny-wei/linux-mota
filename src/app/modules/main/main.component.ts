import {Component,ElementRef,ViewChild} from "@angular/core";
import {RuntimeControll} from "../api/runtime-controll";

@Component({
  selector: "lm-main",
  templateUrl:'./main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  @ViewChild('background_image') background_image: ElementRef;

  constructor(public RuntimeControll:RuntimeControll) {

  }

  setLoginImageSrc(){
    this.RuntimeControll.setLoginImageSrc("/assets/resources/img/background-img.jpg");
  }
}
