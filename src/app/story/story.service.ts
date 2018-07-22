import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";

import { Story } from './story';
import { STORIES } from './mock-stories';

@Injectable({
  providedIn: 'root'
})
export class StoryService {

  constructor(private http: HttpClient) {
    let obj;
    this.getJSON().subscribe(data => obj=data, error => console.log(error));
  }

  getMockStories(): Observable<Story[]> {
    return of(STORIES); 
  }

  

  public getJSON(): Observable<any> {
    // return this.http.get("assets/stories.json").pipe(map((res: any) => res.json()));
    return this.http.get("assets/stories.json").pipe(map(res => res));
    // return this.http.get("assets/stories.json")
    //                 .pipe(map((response: any) => response.json()));
  }

}