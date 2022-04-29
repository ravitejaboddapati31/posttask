import { Injectable } from '@angular/core';
import { Tpost } from './posts.type';


@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private items:Tpost[]=[];


  constructor() { }
  getitems():Tpost[]{
      return this.items;
    }
   addLike(item:Tpost){
     this.items.push(item);
   }
  

    }


