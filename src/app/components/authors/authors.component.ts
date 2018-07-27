import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BooksModalComponent } from '../books/books.modal.component';
import { RequestService } from '../../services/requests.services';
import { AuthorsPostComponent } from './authors.post.component';
import { IAuthors } from '../../interfaces/authors.interface';
import { Component, Inject, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
	selector: 'app-author',
	templateUrl: './authors.component.html',
	styleUrls: [],
	providers: [RequestService]
})
@Injectable()
export class AuthorsComponent {
	listAuthors: IAuthors[];
	optionsDataTable: DataTables.Settings = {};
	dtTrigger: Subject <any> = new Subject();
	constructor(private requestService: RequestService, private modalService: NgbModal, @Inject(SESSION_STORAGE) private storage: StorageService){}
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
				this.storage.set('authors', resultArray);
			},
			error => {
				this.listAuthors = this.storage.get('authors');
				this.dtTrigger.next();
				console.log("Error: "+error)
			}
		);
	}
	openModalBook(IDBook){
		const modalRef = this.modalService.open(BooksModalComponent);
		modalRef.componentInstance.id = IDBook
	}
	openModalPostAuthor(){
		const modalRef = this.modalService.open(AuthorsPostComponent);
	}
}