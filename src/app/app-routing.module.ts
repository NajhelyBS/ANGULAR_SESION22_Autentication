import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { NewproductosComponent } from './pages/newproductos/newproductos.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {path:"", component:RegisterComponent,},
  {path:"login", component:LoginComponent},
  {path:"home", component:HomeComponent},
  {path:"add", component:NewproductosComponent},
  {path:"**", redirectTo:""},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
