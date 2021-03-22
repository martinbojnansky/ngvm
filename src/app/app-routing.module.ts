import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SamplesViewComponent } from './views/samples-view/samples-view.component';

const routes: Routes = [
  {
    path: '',
    component: SamplesViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
