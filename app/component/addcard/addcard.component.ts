import { AddCardService } from './addcard.services';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Card } from './../../models/card';

@Component({
  selector: 'app-addcard',
  templateUrl: './addcard.component.html',
  styleUrls: ['./addcard.component.css']
})
export class AddcardComponent implements OnInit {
  card = {} as Card;
  cards: Card[];

  constructor(private addCardService: AddCardService ) { }

  ngOnInit() {
    this.getCards()
  }

  getCards() {
    this.addCardService.getCards().subscribe(( cards: Card[]) => {
      this.cards = cards;
    });
  } 

  postCard(form: NgForm) {
      this.addCardService.postCard(this.card).subscribe(() => {
        this.cleanForm(form);
      });
  }

     cleanForm(form: NgForm) {
      this.getCards();
      form.resetForm();
      this.card = {} as Card;
    }

}
