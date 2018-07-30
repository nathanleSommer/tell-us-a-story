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

  mouseEnterImage(id:string){
    this.stories[id].active = 'active';
    document.getElementById(id).classList.add("on-top");
  }

  mouseLeaveImage(id:string){
    this.stories[id].active = 'inactive';
    document.getElementById(id).classList.remove("on-top");
  }

  displayStory(id:number,content:string) {
    document.getElementById(id+"").classList.remove("on-top");

    // Get the modal
    let modal = document.getElementById('story-modal');
    modal.style.display = "block";

    document.getElementById('story-modal-header').innerText = this.stories[id].title;
    document.getElementById('story-modal-content').innerText = this.stories[id].content;

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
    } 
  }

  closeDisplay() {
    document.getElementById('story-modal').style.display = "none";
  }
}
