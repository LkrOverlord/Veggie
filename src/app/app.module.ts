import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerDashboardComponent } from './pages/customer-dashboard/customer-dashboard.component';
import { EmployeeDashboardComponent } from './pages/employee-dashboard/employee-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerDashboardComponent,
    EmployeeDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
