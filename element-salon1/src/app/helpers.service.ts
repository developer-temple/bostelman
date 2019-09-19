import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelpersService {
  constructor() { }

  Truncate(text:string, numWords:number) {
    console.log('truncatting')
    const wordsArray:string[] = text.split(' ');
    const result:string[] = wordsArray.slice(0, numWords);
    return result.join(' ') + '...';
  }
}