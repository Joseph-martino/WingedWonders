import { Injectable } from '@angular/core';
import { BIRDS } from './bird-mock';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDataService{

  createDb(){
    const birds = BIRDS;
    return { birds };
  }
}
