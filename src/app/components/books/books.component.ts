import { RequestService } from '../../services/requests.services';
import { IBooks } from '../../interfaces/books.interface';
import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
	selector: 'app-book',
	templateUrl: './books.component.html',
	styleUrls: []
})
export class BooksComponent {
	listBooks: IBooks[];
	optionsDataTable: DataTables.Settings = {};
	dtTrigger: Subject <any> = new Subject();
	constructor(private requestService: RequestService){}
	ngOnInit(){
		this.optionsDataTable = {
			pagingType: 'full_numbers',
			pageLength: 10
		};
		this.getBooks();
	}
	getBooks(): void{
		this.requestService.getBooks().subscribe(
			resultArray => {
				this.listBooks = resultArray;
				this.dtTrigger.next();
			}
		);
	}
}
