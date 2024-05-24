import { Component, Input, OnInit } from '@angular/core';
import { Bird } from '../../models/bird';
import { BirdService } from '../../services/bird.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bird-form',
  templateUrl: './bird-form.component.html',
  styleUrl: './bird-form.component.scss'
})
export class BirdFormComponent implements OnInit{


  @Input() bird!: Bird;
  locations!: string[];
  isAddForm!: boolean;

  constructor(private birdService: BirdService, private router: Router){

  }

  ngOnInit(): void {
    this.locations = this.birdService.getLocations();
    this.isAddForm = this.router.url.includes("add");
  }

  hasLocation(location: string): boolean{
    return this.bird.locations.includes(location);
  }

  isLocationValid(location :string){
    if(this.bird.locations.length == 1 && this.hasLocation(location)){
      return false;
    }
    if(this.bird.locations.length > 2 && !this.hasLocation(location)){
      return false;
    }
    return true;
  }

  addOrRemoveLocation($event: Event, location: string) {
    const isChecked: boolean = ($event.target as HTMLInputElement).checked;

    if(isChecked){
      this.bird.locations.push(location);
      console.log(this.bird.locations);
    } else {
      let index: number = this.bird.locations.indexOf(location);
      this.bird.locations.splice(index,1);
      console.log(this.bird.locations);
    }
  }

  onSubmitForm(form: NgForm): void {
    console.log(form.value);
    if(this.isAddForm){
      this.birdService.addBird(this.bird).subscribe(
        (bird: Bird) => {this.router.navigateByUrl(`birds/${bird.id}`)}
      );
    } else {
      this.birdService.updateBird(this.bird).subscribe(
        () => {this.router.navigateByUrl(`birds/${this.bird.id}`)}
      );
    }
  }
}
