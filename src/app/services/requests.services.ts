import { IAuthors } from '../interfaces/authors.interface';
import { IBooks } from '../interfaces/books.interface';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from "rxjs";

@Injectable()
export class RequestService{
	url: string = 'https://fakerestapi.azurewebsites.net/api/';
	constructor(private http: Http){}
	getAuthors(): Observable<IAuthors[]>{
		return this.http
			.get(this.url+'Authors')
			.pipe(
				map((response: Response) => <IAuthors[]> response.json())
			);
	}
	getBooks(): Observable<IBooks[]>{
		return this.http
			.get(this.url+'Books')
			.pipe(
				map((response: Response) => <IBooks[]> response.json())
			);
	}
	getBookById(idBook): Observable<IBooks[]>{
		return this.http
			.get(this.url+'Books/'+idBook)
			.pipe(
				map((response: Response) => <IBooks[]> response.json())
			);
	}
}