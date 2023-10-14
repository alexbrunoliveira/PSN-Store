import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit{

	@Input()
	nameGame:string =''
	@Input()
	infoCard:string =''
	@Input()
	photo:string =''
	@Input()
	price:string =''

	constructor() { }
	ngOnInit(): void {
	}

}
