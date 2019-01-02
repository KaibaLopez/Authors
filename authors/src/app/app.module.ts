import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AddAuthorComponent } from './add-author/add-author.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';
import { ShowAuthorsComponent } from './show-authors/show-authors.component';
import { EditAuthorComponent } from './edit-author/edit-author.component';
import { QuoteComponent } from './quote/quote.component';
import { AuthorComponent } from './author/author.component';
import { ShowQuoteComponent } from './show-quote/show-quote.component';
import { AddQuoteComponent } from './add-quote/add-quote.component';

@NgModule({
  declarations: [
    AppComponent,
    AddAuthorComponent,
    ShowAuthorsComponent,
    EditAuthorComponent,
    QuoteComponent,
    AuthorComponent,
    ShowQuoteComponent,
    AddQuoteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
