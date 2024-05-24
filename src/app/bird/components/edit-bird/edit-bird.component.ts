import { Component, OnInit } from '@angular/core';
import { Bird } from '../../models/bird';
import { ActivatedRoute } from '@angular/router';
import { BirdService } from '../../services/bird.service';

@Component({
  selector: 'app-edit-bird',
  templateUrl: './edit-bird.component.html',
  styleUrl: './edit-bird.component.scss'
})
export class EditBirdComponent implements OnInit{

  bird!: Bird | undefined;

  constructor(private route: ActivatedRoute, private birdService: BirdService){

  }

  ngOnInit(): void {
      const id: number = +this.route.snapshot.params['id'];
      if(id){
        this.birdService.getBirdById(id).subscribe(bird => this.bird = bird);
      } else {
        this.bird = undefined;
      }
  }

}
