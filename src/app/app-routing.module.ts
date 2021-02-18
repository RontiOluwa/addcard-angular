import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCardComponent } from './add-card/add-card.component';
import { ReadcardComponent } from './readcard/readcard.component';

const routes: Routes = [
  { path: 'addcard', component: AddCardComponent },
  { path: '', component: ReadcardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
