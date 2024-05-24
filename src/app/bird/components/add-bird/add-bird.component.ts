import { Component, OnInit } from '@angular/core';
import { Bird } from '../../models/bird';

@Component({
  selector: 'app-add-bird',
  templateUrl: './add-bird.component.html',
  styleUrl: './add-bird.component.scss'
})
export class AddBirdComponent implements OnInit{

  bird!: Bird;

  ngOnInit(): void {
      this.bird = new Bird();
  }

}
