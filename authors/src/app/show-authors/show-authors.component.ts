import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-show-authors',
  templateUrl: './show-authors.component.html',
  styleUrls: ['./show-authors.component.css']
})
export class ShowAuthorsComponent implements OnInit {
  @Input() show: boolean;
  Authors: any;

  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this.getAuthors();
  }
  getAuthors() {
    const obs = this._httpService.GetAllAuthors();
    obs.subscribe(data => {
      //console.log(data);
      this.Authors = data['authors'];
    })
  }
  DeleteThis(id) {
    console.log(id);
    const obs = this._httpService.eraseAuthor(id);
    obs.subscribe(data => {
      console.log(data['name'], " was deleted");
      this.getAuthors();
    })
  }
  goHome() {
    this.show = true;
    this._router.navigate(['/']);
  }
  EditRoute(id) {
    this.show = false;
    this._router.navigate(['auth/edit/'+id]);
  }

}
