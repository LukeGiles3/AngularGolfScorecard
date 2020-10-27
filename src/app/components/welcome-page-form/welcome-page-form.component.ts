import { Router } from '@angular/router';
import { Courses } from '../../interfaces/course';
import { HerokuCoursesAPIService } from './../../services/heroku-courses-api.service';
import { Component, OnInit, Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-welcome-page-form',
  templateUrl: './welcome-page-form.component.html',
  styleUrls: ['./welcome-page-form.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class WelcomePageFormComponent implements OnInit {

  course: Courses;
  errorMessage: string;
  form: FormGroup;

  constructor(
    private courseService: HerokuCoursesAPIService,
    private router: Router,
    fb: FormBuilder
    ) {
      this.form = fb.group({
        id: ['']
     });
    }

  ngOnInit(): void {
    this.courseService.getCourses().subscribe(data => this.course = data,
      error => this.errorMessage = error);
  }

  getCourseById(courseId: number): void {
    this.router.navigate(['gameOnPage/courseId', {id: courseId}]);
  }
}
