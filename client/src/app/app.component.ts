import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private _httpService: Http) { }

  apiValues: string[] = [];

  title = 'MVP Starter Kit';
  successMessage: string;
  alertClosed = false;

  ngOnInit(): void {
    this._httpService.get('http://localhost:2386/api/home')
      .map(response => response.json())
      .subscribe(values => {
        this.apiValues = values;
      });

    this.successMessage = 'Hello! Can you close me? ;)';
  }

}
