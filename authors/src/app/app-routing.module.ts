import { AddAuthorComponent } from './add-author/add-author.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowAuthorsComponent } from './show-authors/show-authors.component';
import { EditAuthorComponent } from './edit-author/edit-author.component';
import { QuoteComponent } from './quote/quote.component';
import { AuthorComponent } from './author/author.component';
import { AddQuoteComponent } from './add-quote/add-quote.component';
import { ShowQuoteComponent } from './show-quote/show-quote.component';


const routes: Routes = [
  {
    path: 'auth', component: AuthorComponent, children: [
      { path: 'add', component: AddAuthorComponent },
      { path: 'edit/:id', component: EditAuthorComponent },
      { path: '', component: ShowAuthorsComponent },
    ]
  },
  {
    path: 'quotes', component: QuoteComponent, children: [
      { path: 'add/:authorid', component: AddQuoteComponent },
      { path: ':id', component: ShowQuoteComponent },
    ]
  },
  { path: '', pathMatch: 'full', redirectTo: 'auth' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
