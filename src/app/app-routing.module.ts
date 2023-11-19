import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {CvComponent} from "./cv/cv/cv.component";
import {MiniWordComponent} from "./mini-word/mini-word.component";

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'cv',redirectTo:'/',pathMatch:'full'},
  {path:'',component:CvComponent},
  {path:'miniword',component:MiniWordComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
