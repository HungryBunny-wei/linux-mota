import {Injectable} from "@angular/core";

import {LocalStorage} from "ngx-webstorage";
import {HostConfig} from '../../component/interface/HostConfig';
@Injectable()
export class RuntimeControll{

  userName:Array<string>=[
    'root','tuzi','wei'
  ]

  @LocalStorage("HostConfig")
  HostConfig:HostConfig={
    loginImageSrc:"/assets/resources/img/default.jpg",
    homeImageSrc:"/assets/resources/img/12.jpg"
  };
  constructor(){

  }

  login(){

  }
}
