import { Courses } from './../course';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, mapTo } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HerokuCoursesAPIService {

  constructor(
    private http: HttpClient
  ) { }

  getCourses(): Observable<any> {
    const url = `http://golf-courses-api.herokuapp.com/courses/11819`;
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
