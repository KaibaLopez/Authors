import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  AddNewAuthor(newAuthor) {
    return this._http.post('/author/new', newAuthor);
  }
  GetAllAuthors() {
    return this._http.get('/author/all');
  }
  updateOneAuthor(author) {
    return this._http.put('/author/' + author._id, author);
  }
  getOneAuthor(id) {
    return this._http.get('/author/' + id);
  }
  eraseAuthor(id) {
    console.log("");
    return this._http.delete('/author/' + id);
  }
  AddNewQuote(id,newQuote) {
    return this._http.post('/quote/'+id, newQuote);
  }
  voteupQuote(authid,quote) {
    return this._http.put('/quote/' + authid, quote);
  }
  removeQuote(authid, quote) {
    return this._http.delete('/quote/'+authid+'/'+quote._id);
  }
}
