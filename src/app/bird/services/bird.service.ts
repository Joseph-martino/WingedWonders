import { Injectable } from '@angular/core';
import { Bird } from '../models/bird';
import { BIRDS } from '../../bird-mock';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BirdService {

  constructor(private http: HttpClient) { }

  getBirdsList(): Observable<Bird[]>{
    return this.http.get<Bird[]>('api/birds').pipe(
      tap((birdsList) => this.log(birdsList)),
      catchError((error) => this.handleError(error, []))
    );
  }

  getBirdById(id: number): Observable<Bird|undefined>{
    //return BIRDS.find(bird => bird.id == id);
    return this.http.get<Bird>(`api/birds/${id}`).pipe(
      tap((bird) => this.log(bird)),
      catchError((error) => this.handleError(error, undefined))
    );
  }

  updateBird(bird: Bird): Observable<null>{
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.put('api/birds', bird, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }

  deleteBird(id: number): Observable<null> {
    return this.http.delete<Bird>(`api/birds/${id}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }

  addBird(bird: Bird): Observable<Bird>{
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post<Bird>('api/birds', bird, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }

  searchBirdList(term: string): Observable<Bird[]>{
    if(term.length <= 1){
      return of([]);
    }

    return this.http.get<Bird[]>(`api/birds/?name=${term}`).pipe(
      tap((birdsList) => this.log(birdsList)),
      catchError((error) => this.handleError(error, []))
    );
  }

  private log(response: any){
    console.table(response);
  }

  private handleError(error: Error, errorValue: any){
    console.error(error);
    return of(errorValue);
  }

  getLocations(): string[] {
    return [
      'Europe', 
      'Asie', 
      'Amérique du Nord', 
      'Amérique du Sud', 
      'Amérique Centrale', 
      'Amérique Latine',
      'Océanie',
      'Afrique'
    ];
  }

}
