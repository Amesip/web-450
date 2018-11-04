import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-composer-detail',
  templateUrl: './composer-detail.component.html',
  styleUrls: ['./composer-detail.component.css']
})
export class ComposerDetailComponent implements OnInit {

  composers: any;

  constructor(private http: HttpClient) { 
    this.http.get('/api/composer/view/id').subscribe(data => {
      this.composers = data;
      console.log(data)
    });
  }

  ngOnInit() {
  }

}