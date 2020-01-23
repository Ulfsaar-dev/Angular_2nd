import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'; 
import { MealComponent } from './meal/meal.component'; 
import { ReportComponent } from './report/report.component'; 
import { UserComponent } from './user/user.component'; 

const routes: Routes = [
    {path:"home", component:HomeComponent}, 
    {path:"meal", component:MealComponent}, 
    {path:"report", component:ReportComponent}, 
    {path:"user", component:UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } const
RoutingComponent = [HomeComponent,MealComponent,ReportComponent,UserComponent];
