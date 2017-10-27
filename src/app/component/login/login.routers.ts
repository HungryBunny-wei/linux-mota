import {Routes} from "@angular/router";
import {LoginComponent} from "./login.component"

export const ROUTERS: Routes = [
  {
    path: "",
    component: LoginComponent,
    children: []
  }
];
