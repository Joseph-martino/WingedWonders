import { Component, OnInit } from '@angular/core';
import { Bird } from '../../models/bird';
import { Router } from '@angular/router';
import { Observable, Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { BirdService } from '../../services/bird.service';

@Component({
  selector: 'app-search-bird',
  templateUrl: './search-bird.component.html',
  styleUrl: './search-bird.component.scss'
})
export class SearchBirdComponent implements OnInit{

  searchTerms = new Subject<string>; // ==>  { ..."a"..."ab"..."abv"..."ab"..."abc"......} flux tapé par l'utilisateur
  birds$!: Observable<Bird[]>;

  constructor(private router: Router, private birdService: BirdService){
  }

  ngOnInit(): void {
    this.birds$ = this.searchTerms.pipe(
      //{ ..."a"."ab".."abv"."ab"...."abc"......} 1er filtrage: sur le flux des entrées utilisateurs searchterms) retirer les entrées faites en moins de 300 millisecondes d'écart
      debounceTime(300),
      //{ ..."ab"..."ab"..."abc"......} 2eme filtrage: sur le flux searchterms, ajouter au flux seulement s'il y a un changement, les entées identiques seront ignorés
      distinctUntilChanged(),
      //{ ..."ab"........."abc"......} // on veut garder la dernière valeur rentrée par l'utilisateur 
      switchMap((term) => this.birdService.searchBirdList(term))
    );
  }

  search(term: string){
    this.searchTerms.next(term);
  }


  goToBird(bird: Bird){
    this.router.navigateByUrl(`birds/${bird.id}`);
  }

}
