import { FormBuilder, FormGroup } from '@angular/forms';
import { Player } from './../../interfaces/player';
import { ActivatedRoute } from '@angular/router';
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
  frontNineHoles = [];
  backNineYards = [];
  backNinePar = [];
  backNineHoles = [];
  inYard: number;
  outYard: number;
  inPar: number;
  outPar: number;
  totalYard: number;
  totalPar: number;
  player: Player;
  form: FormGroup;

  constructor(
    private courseService: HerokuCoursesAPIService,
    private route: ActivatedRoute,
    fb: FormBuilder
    ) {
      this.form = fb.group({
        name: ['']
     });
    }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.courseService.getSpecificCourse(id).subscribe(data => {
      this.name = data.name;
      this.image = data.thumbnail;
      this.holes = data.holes;

      for (let i = 0; i <= 8; i++) {
        this.frontNineYards.push(this.holes[i].teeBoxes[0].yards);
        this.frontNinePar.push(this.holes[i].teeBoxes[0].par);
        this.frontNineHoles.push(this.holes[i].hole);
        this.outYard = this.frontNineYards.reduce(function(a, b){ return a + b; }, 0);
        this.outPar = this.frontNinePar.reduce(function(a, b){ return a + b; }, 0);
      }
      for (let i = 9; i <= 17; i++) {
        this.backNineYards.push(this.holes[i].teeBoxes[0].yards);
        this.backNinePar.push(this.holes[i].teeBoxes[0].par);
        this.backNineHoles.push(this.holes[i].hole);
        this.inYard = this.backNineYards.reduce(function(a, b){ return a + b; }, 0);
        this.inPar = this.backNinePar.reduce(function(a, b){ return a + b; }, 0);
      }
      this.totalYard = (this.outYard + this.inYard);
      this.totalPar = (this.outPar + this.inPar);
    });
  }

  addPlayer(name: string): void {
    console.log(name);
  }
}
