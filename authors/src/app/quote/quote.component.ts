import { Component, OnInit,Input } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    //this.Author = { name: "" };
    //this._route.params.subscribe((params: Params) => {
    //  console.log(params['id'])
    //  this.getAuthor(params['id']);
    //});
  }
  //getAuthor(id) {
  //  const obs = this._httpService.getOneAuthor(id);
  //  obs.subscribe(data => {
  //    console.log("success", data);
  //    this.Author = data;
  //  })
  //}
}
