import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BooksModalComponent } from '../books/books.modal.component';
import { RequestService } from '../../services/requests.services';
import { IAuthors } from '../../interfaces/authors.interface';
import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
	selector: 'app-author',
	templateUrl: './authors.component.html',
	styleUrls: [],
	providers: [RequestService]
})
export class AuthorsComponent {
	listAuthors: IAuthors[];
	optionsDataTable: DataTables.Settings = {};
	dtTrigger: Subject <any> = new Subject();
	constructor(private requestService: RequestService, private modalService: NgbModal){}
	ngOnInit(){
		this.optionsDataTable = {
			pagingType: 'full_numbers',
			pageLength: 10
		};
		this.getAuthors();
	}
	getAuthors(): void{
		this.requestService.getAuthors().subscribe(
			resultArray => {
				this.listAuthors = resultArray;
				this.dtTrigger.next();
			},
			error => console.log("Error: "+error)
		);
	}
	open(IDBook){
		const modalRef = this.modalService.open(BooksModalComponent);
		modalRef.componentInstance.title = 'About';
		modalRef.componentInstance.id = IDBook
	}
}