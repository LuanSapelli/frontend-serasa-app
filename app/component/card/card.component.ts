import { Card } from './../../models/card';
import { Component, OnInit } from '@angular/core';
import { CardService } from './card.services';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  card = {} as Card;
  cards:  Array<any> = new Array()
  error: any

  constructor(private cardService: CardService) {
   }

  ngOnInit() {
    this.getUserCards()
  }

  getUserCards() {
    this.cardService.getCards().subscribe(
      data => {
        this.cards = data
    }, error => {
        this.error = error
        console.error(error)
    })
  }

     deleteCard(card: Card) {
      this.cardService.deleteCard(card).subscribe(() => {
        this.getUserCards();
      });
      this.cards.pop()
    }  

}

