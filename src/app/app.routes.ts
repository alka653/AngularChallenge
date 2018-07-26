import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BooksComponent } from './components/books/books.component';
import { AuthorsComponent } from './components/authors/authors.component';

const APP_ROUTES: Routes = [
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'authors',
		component: AuthorsComponent
	},
	{
		path: 'books',
		component: BooksComponent
	}
];

export default APP_ROUTES;