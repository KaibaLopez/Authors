import { Component, OnInit,Input } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-show-quote',
  templateUrl: './show-quote.component.html',
  styleUrls: ['./show-quote.component.css']
})
export class ShowQuoteComponent implements OnInit {
  Author: any;
  Quote: any;
  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this.Author = { name: "" };
    this._route.params.subscribe((params: Params) => {
      this.getAuthor(params['id']);
    });
  }
  getAuthor(id) {
    const obs = this._httpService.getOneAuthor(id);
    obs.subscribe(data => {
      this.Author = data;
    })
  }
  deleteThis(quote) {
    const obs = this._httpService.removeQuote(this.Author._id, quote);
    obs.subscribe(data => {
      this.getAuthor(this.Author._id);
    })
  }
  voteUp(quote, opers) {
    quote.oper = opers;
    const obs = this._httpService.voteupQuote(this.Author._id,quote);
    obs.subscribe(data => {
      this.Author = data;
    })
    
  }
}
