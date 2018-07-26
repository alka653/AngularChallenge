import { RequestService } from '../../services/requests.services';
import { IBooks } from '../../interfaces/books.interface';
import { Component } from '@angular/core';

@Component({
	selector: 'app-book-modal',
	templateUrl: './books.modal.component.html',
	styleUrls: []
})
export class BooksModalComponent {
	id = '';
	detailBook: IBooks[];
	constructor(private requestService: RequestService){}
	ngOnInit(){
		this.requestService.getBookById(this.id).subscribe(
			resultArray => {
				this.detailBook = resultArray;
			},
			error => console.log("Error: "+error)
		)
	}
}
