import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {ProductComponent} from './product.component'
import { ProductDetailComponent } from "./product-detail.component";
import {DashboardComponent} from "./dashboard.component";
import {ProductService} from "./product.service";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [

    AppComponent, 
    ProductComponent,
    ProductDetailComponent,
    DashboardComponent

  ],
  providers: [ ProductService ],

  bootstrap: [AppComponent]
})
export class AppModule { }
