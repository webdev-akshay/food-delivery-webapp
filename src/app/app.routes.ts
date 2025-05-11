import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { NotfoundComponent } from './shared/components/notfound/notfound.component';
import { HomeComponent } from './user/home/home.component';

export const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'', redirectTo:'/home',pathMatch:'full'},
  {path:'***', component:NotfoundComponent}
];
