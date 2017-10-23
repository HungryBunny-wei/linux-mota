import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {MainComponent} from "./main.component";
import {NzLayoutModule} from "ng-zorro-antd";
import {ROUTERS} from "./main.routers"
@NgModule({
  declarations:[MainComponent],
  imports:[
    NzLayoutModule,
    RouterModule.forChild(ROUTERS)
  ]
})
export class MainModule{

}
