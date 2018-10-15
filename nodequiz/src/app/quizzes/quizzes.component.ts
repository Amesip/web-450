import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css']
})
export class QuizzesComponent implements OnInit {

  onSubmit(value: any) {
      console.log(value)
  }
  questions: any;
  constructor(private router: Router, private http: HttpClient) { 
  }

  ngOnInit() {
  }

}
