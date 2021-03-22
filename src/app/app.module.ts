import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudDetailViewComponent } from './views/crud-detail-view/crud-detail-view.component';
import { SampleService } from './services/sample.service';
import { CrudActionsViewComponent } from './views/crud-actions-view/crud-actions-view.component';
import { SampleDetailViewComponent } from './views/sample-detail-view/sample-detail-view.component';
import { SamplesViewComponent } from './views/samples-view/samples-view.component';

@NgModule({
  declarations: [
    AppComponent,
    CrudDetailViewComponent,
    CrudActionsViewComponent,
    SampleDetailViewComponent,
    SamplesViewComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [SampleService],
  bootstrap: [AppComponent],
})
export class AppModule {}
