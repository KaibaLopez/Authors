import { Component,OnInit } from '@angular/core';
import { HttpService } from './http.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string;
  atHome: boolean;
  Show: any;
  constructor(private _httpService: HttpService) { }
  ngOnInit() {
    this.title = "Authors";
    this.Show = true;
  }
  
}
