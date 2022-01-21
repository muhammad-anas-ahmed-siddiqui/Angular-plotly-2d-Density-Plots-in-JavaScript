import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DensityGraphComponent } from './components/density-graph/density-graph.component';


const routes: Routes = [
{path: '', component: DensityGraphComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
