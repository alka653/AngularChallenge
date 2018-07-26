import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'Test';
	lugares:any = [
		{
			nombre: 'Prueba 1',
			active: true
		},
		{
			nombre: 'Prueba 2',
			active: false
		}
	];
	constructor(){
		
	}
	/*clickEvent = () => {
		alert('clicked')
	}*/
}
