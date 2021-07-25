import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PenaltyCalcComponent} from 'src/app/PenaltyCalc/penalty-calc/penalty-calc.component';
const routes: Routes = [{
  path:"Penaltycalc",component:PenaltyCalcComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
