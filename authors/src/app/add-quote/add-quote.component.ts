import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.css']
})
export class AddQuoteComponent implements OnInit {
  Author: any;
  newQuote: any;
  FlashMessage: string;
  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this.Author = { name: "" };
    this.newQuote = { content: ""}
    this._route.params.subscribe((params: Params) => {
      console.log(params['authorid']);
      this.getAuthor(params['authorid']);
    });
  }
  getAuthor(id) {
    const obs = this._httpService.getOneAuthor(id);
    obs.subscribe(data => {
      this.Author = data;
    })
  }
  addQuote() {
    const obs = this._httpService.AddNewQuote(this.Author._id,this.newQuote);
    obs.subscribe(data => {
      if(data['errors'])
        this.FlashMessage = data['errors']['quotes']['errors']['content']['message'];
      else 
        this.goHome();
        
    })
  }
  goHome() {
    this._router.navigate(['/quotes/'+this.Author._id]);
  }
}
