import { Component, OnInit } from '@angular/core';
import { BirdService } from '../../services/bird.service';
import { Bird } from '../../models/bird';
import { Router } from '@angular/router';

@Component({
  selector: 'app-birds-list',
  templateUrl: './birds-list.component.html',
  styleUrl: './birds-list.component.scss'
})
export class BirdsListComponent implements OnInit{

  birds!: Bird[];

  constructor(private birdService: BirdService, 
    private router: Router){

  }

  ngOnInit(): void {
      this.birdService.getBirdsList()
      .subscribe(birdsList => this.birds = birdsList);
  }

  // onAddBird(){
  //   this.router.navigateByUrl("birds/add");
  // }

}
