import { Courses } from './../../course';
import { HerokuCoursesAPIService } from './../../services/heroku-courses-api.service';
import { Component, OnInit, Injectable } from '@angular/core';

@Component({
  selector: 'app-welcome-page-component',
  templateUrl: './welcome-page-component.component.html',
  styleUrls: ['./welcome-page-component.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class WelcomePageComponentComponent implements OnInit {

  course: Courses;
  errorMessage: string;

  constructor(private courseService: HerokuCoursesAPIService) { }

  ngOnInit(): void {
    this.courseService.getCourses().subscribe(data => this.course = data,
      error => this.errorMessage = error);
  }
}
