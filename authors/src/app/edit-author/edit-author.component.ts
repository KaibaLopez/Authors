import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { getAllDebugNodes } from '@angular/core/src/debug/debug_node';
@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrls: ['./edit-author.component.css']
})
export class EditAuthorComponent implements OnInit {
  editedAuthor : any;
  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this.editedAuthor = { name:"" };
    this._route.params.subscribe((params: Params) => {
      console.log(params['id'])
      this.getAuthor(params['id']);
    });
  }
  editAuthor() {
    const obs = this._httpService.updateOneAuthor(this.editedAuthor);
    obs.subscribe(data => {
      console.log("success", data);
      this.goHome();
    })
  }
  getAuthor(id) {
    const obs = this._httpService.getOneAuthor(id);
    obs.subscribe(data => {
      console.log("success", data);
      this.editedAuthor = data;
    })
  }
  goHome() {
    this._router.navigate(['/']);
  }
}
