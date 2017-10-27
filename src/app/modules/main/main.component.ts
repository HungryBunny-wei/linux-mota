import {Component,ElementRef,ViewChild} from "@angular/core";
import {RuntimeControll} from "../api/runtime-controll";

@Component({
  selector: "lm-main",
  templateUrl:'./main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  @ViewChild('loginBackgroundImage') loginBackgroundImage: ElementRef;

  login_background_image:string = this.RuntimeControll.HostConfig.loginImageSrc;
  constructor(public RuntimeControll:RuntimeControll) {

  }

  setHomeImage() {
    this.login_background_image = this.RuntimeControll.HostConfig.homeImageSrc;
  }
}
