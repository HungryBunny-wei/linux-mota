import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {LoginComponent} from "./login.component";
import {ROUTERS} from "./login.routers"
@NgModule({
  declarations:[LoginComponent],
  imports:[
    RouterModule.forChild(ROUTERS)
  ]
})
export class LoginModule{

}
