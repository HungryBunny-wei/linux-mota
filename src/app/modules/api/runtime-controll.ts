import {Injectable} from "@angular/core";

import {LocalStorage} from "ngx-webstorage";
import {SessionStorage} from "ngx-webstorage";
import {HostConfig} from '../../component/interface/HostConfig';

export type HostState = 'login' | 'run';
@Injectable()
export class RuntimeControll{

  userName:Array<string>=[
    'root','tuzi','wei'
  ]

  @LocalStorage("HostConfig",{
    loginImageSrc:"/assets/resources/img/default.jpg",
    homeImageSrc:"/assets/resources/img/12.jpg"
  })
  HostConfig:HostConfig;

  @SessionStorage("HostState")
  HostState:HostState = "login";

  constructor(){
  }

  login(){
    this.HostState = "run";
  }

  outlog(){
    this.HostState = "login";
  }

  setLoginImageSrc(src:string){
    this.HostConfig.loginImageSrc = src;
    this.HostConfig = this.HostConfig;
  }
}
