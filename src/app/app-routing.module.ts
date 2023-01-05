import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlanyComponent } from './projects/plany/plany.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'plany', component: PlanyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
