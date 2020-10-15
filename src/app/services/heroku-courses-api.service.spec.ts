import { TestBed } from '@angular/core/testing';

import { HerokuCoursesAPIService } from './heroku-courses-api.service';

describe('HerokuCoursesAPIService', () => {
  let service: HerokuCoursesAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HerokuCoursesAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
