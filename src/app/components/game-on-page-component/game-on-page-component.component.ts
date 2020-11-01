import { FormArray, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Player } from './../../interfaces/player';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { HerokuCoursesAPIService } from './../../services/heroku-courses-api.service';

@Component({
  selector: 'app-game-on-page-component',
  templateUrl: './game-on-page-component.component.html',
  styleUrls: ['./game-on-page-component.component.css']
})
export class GameOnPageComponentComponent implements OnInit {

  holes: any;
  holeCount: number;
  name: string;
  image: any;
  frontNineYards = [];
  frontNinePar = [];
  frontNineHoles = [];
  frontNine: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  backNineYards = [];
  backNinePar = [];
  backNineHoles = [];
  backNine: number[] = [10, 11, 12, 13, 14, 15, 16, 17, 18];
  inYard: number;
  outYard: number;
  inPar: number;
  outPar: number;
  totalYard: number;
  totalPar: number;
  players: Player[] = [];
  playerName = new FormControl('');
  form: FormGroup;

  constructor(
    private courseService: HerokuCoursesAPIService,
    private route: ActivatedRoute,
    private renderer: Renderer2,
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
      this.holeCount = data.holeCount;

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

//   // tslint:disable-next-line: typedef
//   get players() {
//     return this.form.get('name') as FormArray;
//   }

 addPlayer(): void {
      this.players.push({
          name: this.playerName.value,
      });

      this.playerName.setValue('');
}
}
