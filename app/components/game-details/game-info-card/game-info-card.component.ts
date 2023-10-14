import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-game-info-card',
  templateUrl: './game-info-card.component.html',
  styleUrls: ['./game-info-card.component.css']
})
export class GameInfoCardComponent implements OnInit {

	@Input()
	infoCard:string =''

	constructor() { }
	ngOnInit(): void {
	}

}
