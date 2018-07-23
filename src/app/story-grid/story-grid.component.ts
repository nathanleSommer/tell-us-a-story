import { Component, OnInit, Input } from '@angular/core';
import { trigger, style, transition, animate, state } from '@angular/animations';
import { Story } from '../story/story';
import { StoryService } from '../story/story.service';

@Component({
  selector: 'story-grid',
  templateUrl: './story-grid.component.html',
  styleUrls: ['./story-grid.component.scss'],
  animations: [
    trigger('storyState', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active',   style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.3)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})

export class StoryGridComponent implements OnInit {
  stories: Story[];

  constructor(private storyService: StoryService) { }

  ngOnInit() {
    this.getStories();
  }

  getStories(): void {
    this.storyService.getJSON()
    .subscribe(stories => this.stories = stories);
  }

  toggleState(i:number,content:string) {
    for(let s of this.stories) {
      console.log(s);
      if(s.id != i){
        console.log(s.id);
        s.active = 'inactive';
        document.getElementById(s.id+"").classList.remove("on-top");
      }
    }

    this.stories[i].active = this.stories[i].active === 'active' ? 'inactive' : 'active';
    document.getElementById(""+i).classList.add("on-top");
    console.log(this.stories[i].content);
  }

  mouseOverImage(id:string,title:string){
    console.log("id: "+id+", title: "+title);
  }

}
