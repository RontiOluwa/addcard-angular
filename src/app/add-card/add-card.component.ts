import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as CardActions from '../actions/card.actions';
import { AppState } from '../app.state';
import * as moment from 'moment';
import { Store } from '@ngrx/store';
import { validateWhitespace } from '../utilities/validator';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent implements OnInit {

  exform: FormGroup;

  success= ""

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.exform = new FormGroup({
      'card_number': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]\d*$/), validateWhitespace]),
      'card_name' : new FormControl(null, [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]),
      'date' : new FormControl(null, [Validators.required, this.dateValidator, validateWhitespace]),
      'ccv' : new FormControl(
        null,
        [
          Validators.pattern(/^[1-9]\d*$/),
          Validators.maxLength(3),
          Validators.minLength(3),
          validateWhitespace
        ]),
      'amount' : new FormControl(null, [
          Validators.pattern(/^[1-9]\d*$/),
          Validators.min(0),
          Validators.required,
          validateWhitespace
      ])
    });
  }

  dateValidator(control: FormControl): { [s: string]: boolean } {
    if (control.value) {
      const date = moment(control.value);
      const today = moment();
      if (date.isBefore(today)) {
        return { 'invalidDate': true }
      }
    }
    return null;
  }

  clicksub() {
    const val = this.exform.value;
    this.store.dispatch(new CardActions.AddCard(val))
    this.success = "Card Added Successfuly"
  }

  
  get card_number() {
    return this.exform.get('card_number');
  }
  get card_name() {
    return this.exform.get('card_name');
  }
  get date() {
    return this.exform.get('date');
  }
  get ccv() {
    return this.exform.get('ccv');
  }
  get amount() {
    return this.exform.get('amount');
  }

}
