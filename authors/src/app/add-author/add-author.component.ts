import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit {
  @Input() showForm: boolean;
  newAuthor: any;
  FlashMessage: string;
  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) {  }

  ngOnInit() {
    this.showForm = true;
    this.newAuthor = { name: "" };
  }
  addAuthor() {
    console.log(this.newAuthor);
    const obs = this._httpService.AddNewAuthor(this.newAuthor);
    obs.subscribe(data => {
      console.log(data['errors']);
      if (data['errors'])
        this.FlashMessage = data['errors']['name']['message'];
      else
        this.goHome();
    })
  }
  goHome() {
    this._router.navigate(['/']);
  }

}
