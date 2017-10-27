import {Routes} from '@angular/router';

export const ROUTES: Routes = [
  {
    path: '',
    redirectTo: "/main",
    pathMatch: "full"
  },
  {path: 'main', loadChildren: './modules/main#MainModule'},
];
