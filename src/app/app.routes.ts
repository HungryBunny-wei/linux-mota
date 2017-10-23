import {Routes} from '@angular/router';

export const ROUTES: Routes = [
  {
    path: '',
    redirectTo: "login",
    pathMatch: "full"
  },
  {path: 'main', loadChildren: './main#MainModule'},
];
