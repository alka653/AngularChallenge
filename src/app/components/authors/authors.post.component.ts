import { RequestService } from '../../services/requests.services';
import { IBooks } from '../../interfaces/books.interface';
import { Component } from '@angular/core';

@Component({
	selector: 'app-author-post',
	templateUrl: './authors.post.component.html',
	styleUrls: []
})
export class AuthorsPostComponent {
	IDBook = '';
	FirstName = '';
	LastName = '';
	message = '';
	type = 'success';
	constructor(private requestService: RequestService){}
	postRequest(){
		this.requestService.postAuthors({
			IDBook: this.IDBook,
			FirstName: this.FirstName,
			LastName: this.LastName
		})
		.subscribe(
			response => {
				switch(response.status){
					case 200:
						this.message = 'Successfully saved data';
						break;
					default:
						this.type = 'danger';
						this.message = 'An error has ocurred';
						break;
				}
			},
			error => {
				this.type = 'danger';
				this.message = 'An error has ocurred';
			}
		);
	}
}
