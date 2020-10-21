import { ActivatedRoute, Router } from '@angular/router';
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
  courseId: number;
  form: FormGroup;

  constructor(
    private courseService: HerokuCoursesAPIService,
    private router: Router,
    private route: ActivatedRoute,
    fb: FormBuilder
    ) {
      this.form = fb.group({
        id: [''],
        teeBox: [''],
        player1: [''],
        player2: [''],
        player3: [''],
        player4: ['']
     });
    }

  ngOnInit(): void {
    this.courseService.getCourses().subscribe(data => this.course = data,
      error => this.errorMessage = error);
  }
  // tslint:disable-next-line: typedef
  onSubmit(data) {
    const courseId = data.id;
    const teeBox = data.teeBox;
    const player1 = data.player1;
    const player2 = data.player2;
    const player3 = data.player3;
    const player4 = data.player4;
    this.router.navigate(['../gameOnPage']);
  }

}
