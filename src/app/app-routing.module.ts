import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SearchTrainComponent } from './search-train/search-train.component';
import { CostomerLoginComponent } from './costomer-login/costomer-login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ContactComponent } from './contact/contact.component';
import { FeedbackComponent } from './feedback/feedback.component';

const routes: Routes = [
  {path:'dashboard',component:DashboardComponent,children:[
    {path:'home',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'search-train',component:SearchTrainComponent},
    {path:'costomer-login',component:CostomerLoginComponent},
    {path:'registration',component:RegistrationComponent},
    {path:'contact',component:ContactComponent},
    {path:'feedback',component:FeedbackComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
