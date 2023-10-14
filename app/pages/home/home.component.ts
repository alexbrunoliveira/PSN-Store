import { Component, OnInit } from '@angular/core';
import { dataFake } from '../../data/dataFake'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	listGames:Array<any> = [{
		id:'',
		nameGame: '',
		potho:'',
		description:'',
		price:'',
		platform:'',
		launch:'',
		distributor:'',
		gender:'',
		details:'',

	}]
	constructor() { }
	ngOnInit(): void {
		this.getListGames()
	}

	getListGames () {
		this.listGames =  dataFake
		// console.log(this.listGames)
	}

}
