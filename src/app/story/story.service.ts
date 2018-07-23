import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { Story } from './story';
import { take } from 'rxjs/operators';


export interface StoryInterface {
  path:string, title:string, author:string, content:string,active:string
}

@Injectable({
  providedIn: 'root'
})
export class StoryService {
  nbStories:number = 0;

  stories:BehaviorSubject<any> = new BehaviorSubject<any>({});
  loaded:boolean = false;

  constructor(private httpClient: HttpClient) {
    this.httpClient.get('assets/stories-short.json')
    .subscribe((stories:any) => {
      for(let s of stories){
        this.nbStories++;
      }
      this.stories.next(stories);
    });
  }

  addStory(story:any):void{

    let newStory = this.stories.asObservable();
    newStory.pipe(take(1)).subscribe(val => {
      console.log(val);
      const newArr = [...val, { 
          "path": story.path, 
          "title":story.title, 
          "author":story.author, 
          "content":story.content,
          "active":story.active,
          "id":this.nbStories
        }];
      this.stories.next(newArr);
    })

    // newStory.push(
    // { 
    //   "path": story.path, 
    //   "title":story.title, 
    //   "author":story.author, 
    //   "content":story.content,
    //   "active":story.active,
    //   "id":this.nbStories-1
    // });


    //this.stories.next(newStory);

    // this.httpClient.get('assets/stories.json')
    // .subscribe((newStories:any) => {
    //   newStories.push(
    //     { "path": story.path, 
    //       "title":story.title, 
    //       "author":story.author, 
    //       "content":story.content,
    //       "active":story.active,
    //       "id":this.nbStories-1
    //     });
    //   this.stories.next(newStories);
    // });
    this.nbStories++;
  }

  public getJSON(): BehaviorSubject<any> {
    return this.stories;
  }
}