import {Injectable} from '@angular/core';
import{Item} from '../interfaces/item';

import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListServiceService{
  
  subjectArray = new Subject<Item[]>();
  itemArray: Item[] = [];
  
  total = new Subject<number>();
  
  constructor() { }
  
  calculateTotal(){
    var numberValue: number = 0;
    for(let i = 0; i < this.itemArray.length; i++ ){
      numberValue = numberValue + this.itemArray[i].value;
    }
    this.total.next(numberValue);
  }
  
  addToArray(i: Item){
    this.itemArray.push(i);
    this.subjectArray.next(this.itemArray);
    this.calculateTotal();
  }

  editItem(index: number, item: Item){
    this.itemArray.splice(index, 1, item);
    this.calculateTotal();
  }

  removeItem(index: number){
    this.itemArray.splice(index, 1);
    this.calculateTotal();
  }
  
}