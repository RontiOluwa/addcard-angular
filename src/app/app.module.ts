import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/card.reducer';
import { AddCardComponent } from './add-card/add-card.component';
import { ReadcardComponent } from './readcard/readcard.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCardComponent,
    ReadcardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      reducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
