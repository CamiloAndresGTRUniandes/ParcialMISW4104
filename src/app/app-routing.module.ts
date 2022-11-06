import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlantsComponent } from './pages/plants/plants.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path:'home', component:PlantsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
