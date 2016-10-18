import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { ClickMeComponent } from './click-me.component'
import { LoopbackComponent } from './loop-back.component'
@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    ClickMeComponent,
    AppComponent,
    HeroDetailComponent,

    LoopbackComponent
  ],
  bootstrap: [AppComponent,ClickMeComponent]
})
export class AppModule { }
