import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';
import { RequestService } from '../../services/requests.services';
import { Component, Inject, Injectable } from '@angular/core';
import { IBooks } from '../../interfaces/books.interface';
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
	constructor(private requestService: RequestService, @Inject(SESSION_STORAGE) private storage: StorageService){}
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
				this.storage.set('books', resultArray);
			},
			error => {
				this.listBooks = this.storage.get('books');
				this.dtTrigger.next();
				console.log("Error: "+error)
			}
		);
	}
}
