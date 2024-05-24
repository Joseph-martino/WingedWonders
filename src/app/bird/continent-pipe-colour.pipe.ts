import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'continentPipeColour'
})
export class ContinentPipeColourPipe implements PipeTransform {

  transform(location: string): string {
    
    let colour!: string;
    switch(location){
      case 'Europe':
        colour = "#9FD55D";
        break;
      case 'Asie':
        colour = "#F24040";
        break;
      case 'Amérique du Nord':
          colour = "#F4A1FF";
          break;
      case 'Amérique du Sud':
          colour = "#FFEC5E";
          break;
      case 'Amérique Centrale':
          colour = "#FFAA49";
          break;
      case 'Amérique Latine':
          colour = "#EEFF34";
          break;
      case 'Océanie':
          colour = "#7FEAF0";
          break;
      case 'Afrique':
          colour = "#FF9253";
          break;
    }
    return colour;
  }

}
