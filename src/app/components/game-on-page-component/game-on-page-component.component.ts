import { ActivatedRoute } from '@angular/router';
import { Courses } from './../../interfaces/course';
import { Holes } from './../../interfaces/holes';
import { Component, OnInit } from '@angular/core';
import { HerokuCoursesAPIService } from './../../services/heroku-courses-api.service';

@Component({
  selector: 'app-game-on-page-component',
  templateUrl: './game-on-page-component.component.html',
  styleUrls: ['./game-on-page-component.component.css']
})
export class GameOnPageComponentComponent implements OnInit {

  holes: any;
  name: string;
  image: any;
  frontNineYards = [];
  frontNinePar = [];
  backNineYards = [];
  backNinePar = [];
  inYard: number;
  outYard: number;
  inPar: number;
  outPar: number;
  totalYard: number;
  totalPar: number;

  constructor(
    private courseService: HerokuCoursesAPIService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.courseService.getSpecificCourse(id).subscribe(data => {
      this.name = data.name;
      this.image = data.thumbnail;
      this.holes = data.holes;

      for (let i = 0; i <= 8; i++) {
        this.frontNineYards.push(this.holes[i].teeBoxes[0].yards);
      }
    });
  }
}
