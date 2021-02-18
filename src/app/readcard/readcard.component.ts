import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Card } from '../models/card.model';
import * as CardActions from '../actions/card.actions';
import { AppState } from '../app.state';


@Component({
  selector: 'app-readcard',
  templateUrl: './readcard.component.html',
  styleUrls: ['./readcard.component.css']
})
export class ReadcardComponent implements OnInit {

  cards: Observable<Card[]>;


  constructor(private store: Store<AppState>) { 
    this.cards = store.select('card');
  }
  
  ngOnInit() {
  }

}
