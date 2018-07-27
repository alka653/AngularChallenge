import { AuthorsPostComponent } from './components/authors/authors.post.component';
import { BooksModalComponent } from './components/books/books.modal.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './components/modal/modal.component';
import { BooksComponent } from './components/books/books.component';
import { StorageServiceModule } from 'angular-webstorage-service';
import { HomeComponent } from './components/home/home.component';
import { RequestService } from './services/requests.services';
import { BrowserModule } from '@angular/platform-browser';
import { DataTablesModule } from 'angular-datatables';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";
import { NgModule } from '@angular/core';
import APP_MODULES from'./app.routes';

@NgModule({
	declarations: [
		AppComponent,
			AuthorsComponent,
			HomeComponent,
			BooksComponent,
			ModalComponent,
			BooksModalComponent,
			AuthorsPostComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		RouterModule.forRoot(APP_MODULES),
		HttpModule,
		DataTablesModule,
		NgbModule.forRoot(),
		StorageServiceModule
	],
	providers: [
		RequestService,
		NgbActiveModal
	],
	bootstrap: [AppComponent],
	entryComponents: [
		BooksModalComponent,
		AuthorsPostComponent
	]
})
export class AppModule { }
