import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-preco',
  templateUrl: './card-preco.component.html',
  styleUrls: ['./card-preco.component.css']
})
export class CardPrecoComponent implements OnInit {

  @Input()
  gameType:string="Digital PS4"

  @Input()
  gamePreco:string= "R$399,90"

  constructor() { }

  ngOnInit(): void {
  }

}
