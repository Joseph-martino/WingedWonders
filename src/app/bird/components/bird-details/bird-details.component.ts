import { Component, OnInit } from '@angular/core';
import { Bird } from '../../models/bird';
import { ActivatedRoute, Router } from '@angular/router';
import { BirdService } from '../../services/bird.service';

@Component({
  selector: 'app-bird-details',
  templateUrl: './bird-details.component.html',
  styleUrl: './bird-details.component.scss'
})
export class BirdDetailsComponent implements OnInit{

  bird!: Bird | undefined;

  constructor(private birdService: BirdService, private route: ActivatedRoute, private router: Router){

  }

  ngOnInit(): void {

      const id: number = +this.route.snapshot.params['id'];
      this.birdService.getBirdById(id)
      .subscribe(bird => this.bird = bird);
  }

  onGoToBirdsList(){
    this.router.navigateByUrl('birds');
  }

  onEdit(){
    this.router.navigateByUrl(`birds/edit/${this.bird?.id}`)
  }

  onDelete(bird: Bird){
    this.birdService.deleteBird(bird.id).subscribe(
      () => this.onGoToBirdsList()
    );
  }

}
