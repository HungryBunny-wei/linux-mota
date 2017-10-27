import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {NzLayoutModule} from "ng-zorro-antd";
import {ROUTERS} from "./main.routers";

import {MainComponent} from "./main.component";

import {LmSrcDirective} from "../../component/lm-src/lm-src.directive";

const COMPONENTS = [
  MainComponent
]
const DIRECTIVES = [
  LmSrcDirective
]
const DECLARATIONS = [
  ...COMPONENTS,...DIRECTIVES
]
@NgModule({
  declarations:DECLARATIONS,
  imports:[
    NzLayoutModule,
    RouterModule.forChild(ROUTERS)
  ]
})
export class MainModule{

}
