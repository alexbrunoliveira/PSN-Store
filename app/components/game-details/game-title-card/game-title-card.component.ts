import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-title-card',
  templateUrl: './game-title-card.component.html',
  styleUrls: ['./game-title-card.component.css']
})
export class GameTitleCardComponent implements OnInit {

	@Input()
	nameGame:string = ''
	@Input()
	price:string =''

	constructor() { }
	ngOnInit(): void {
	}

}
