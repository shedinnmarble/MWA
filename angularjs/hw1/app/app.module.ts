import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api/in-memory-web-api.module';
import { InMemoryDataService } from './in-memory-data.service';


import { AppComponent } from './app.component';
import { ProductComponent } from './product.component'
import { ProductDetailComponent } from "./product-detail.component";
import { DashboardComponent } from "./dashboard.component";
import { ProductService } from "./product.service";
import { ProductSearchComponent } from "./product-search.component"

import { AppRoutingModule } from "./app-routing.module";
import { XDWToUpperCase } from './touppercase.pipe'

import './rxjs-extensions';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule

  ],
  exports: [XDWToUpperCase],
  declarations: [

    AppComponent,
    ProductComponent,
    ProductDetailComponent,
    DashboardComponent,
    XDWToUpperCase,
    ProductSearchComponent
  ],
  providers: [ProductService],

  bootstrap: [AppComponent]
})
export class AppModule { }
