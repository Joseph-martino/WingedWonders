import { Component, Input } from '@angular/core';
import { Bird } from '../../models/bird';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bird',
  templateUrl: './bird.component.html',
  styleUrl: './bird.component.scss'
})
export class BirdComponent {

  @Input() bird!: Bird;

  constructor(private router: Router){

  }

  onContinue(id: number){
    this.router.navigateByUrl(`birds/${id}`);
  }

}
