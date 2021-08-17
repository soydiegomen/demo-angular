import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './screens/home/home.component';
import { MyCounterComponent } from './blocks/my-counter/my-counter.component';
import { counterReducer } from './counter.reducer';
import { ResultCounterComponent } from './blocks/result-counter/result-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MyCounterComponent,
    ResultCounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ count: counterReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
