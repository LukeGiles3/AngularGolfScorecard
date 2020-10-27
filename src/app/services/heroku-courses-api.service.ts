// import { Holes } from './../interfaces/holes';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HerokuCoursesAPIService {

  specificCourseData;

  constructor(
    private http: HttpClient
  ) { }

  getCourses(): Observable<any> {
    const url = `http://golf-courses-api.herokuapp.com/courses/`;
    return this.http.get(url).pipe(
      catchError(this.handleError),
      // tslint:disable-next-line: no-string-literal
      map(data => data['courses'])
    );
  }

  // tslint:disable-next-line: typedef
  getSpecificCourse(courseId: string) {
    const url = `http://golf-courses-api.herokuapp.com/courses/${courseId}`;
    return this.http.get(url).pipe(
      catchError(this.handleError),
      // tslint:disable-next-line: no-string-literal
      map(data => data['data'])
    );
  }

  // tslint:disable-next-line: typedef
  handleError(error: HttpErrorResponse) {
    return throwError(error.message);
  }
}
