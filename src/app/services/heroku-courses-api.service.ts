import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HerokuCoursesAPIService {

  constructor(
    private http: HttpClient,
    private coursesUrl = 'courses/:id'
  ) { }
}
