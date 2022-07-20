import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component'
import { RegistorComponent } from './authentication/registor/registor.component';
import { NavbarComponent } from './dashboard/navbar/navbar.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
const routes: Routes = [
  {path: "", redirectTo: 'login', pathMatch: 'full'},
  {path: "login", component: LoginComponent},
  {path: "registor", component: RegistorComponent},
  {path: "navbar", component:NavbarComponent},
  {path: "sidebar", component: SidebarComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
