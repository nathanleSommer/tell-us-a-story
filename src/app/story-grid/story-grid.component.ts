import { Component, OnInit, Input } from '@angular/core';
import { trigger, style, transition, animate, state, keyframes, query, stagger} from '@angular/animations';
import { Story } from '../story/story'

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
  title:string;
  author:string;

  stories: Story[] = [
    {
      path:"assets/images/stories/chandra.jpg",
      title:"Chandra la pyromane de Kaladesh",
      author:"Inso",
      content:"content",
      active:"inactive",
      id:0
    },
    {
      path:"assets/images/stories/angel.jpg",
      title:"Isobel l'ange guerrière",
      author:"Inso",
      content:"content",
      active:"inactive",
      id:1
    },
    {
      path:"assets/images/stories/assassin.jpg",
      title:"Kaya l'assassin fantome",
      author:"Inso",
      content:"content",
      active:"inactive",
      id:2
    },
    {
      path:"assets/images/stories/beast.jpg",
      title:"Les monstres de Garruk",
      author:"Inso",
      content:"content",
      active:"inactive",
      id:3
    },
    {
      path:"assets/images/stories/birds.jpg",
      title:"La légende Jeskai",
      author:"Inso",
      content:"content",
      active:"inactive",
      id:4
    },
    {
      path:"assets/images/stories/brunela.jpg",
      title:"L'abominable ange d'Alabaster",
      author:"Inso",
      content:"content",
      active:"inactive",
      id:5
    },
    {
      path:"assets/images/stories/cat-warrior.jpg",
      title:"L'appel d'Ajani",
      author:"Inso",
      content:"content",
      active:"inactive",
      id:6
    },
    {
      path:"assets/images/stories/elements.png",
      title:"Magic the gathering : mythes et légendes",
      author:"Inso",
      content:"content",
      active:"inactive",
      id:7
    },
    {
      path:"assets/images/stories/elf.png",
      title:"Nissa l'elf de légende",
      author:"Inso",
      content:"content",
      active:"inactive",
      id:8
    },
    {
      path:"assets/images/stories/necro.jpg",
      title:"Liliana le dernier espoir",
      author:"Inso",
      content:"content",
      active:"inactive",
      id:9
    },
    {
      path:"assets/images/stories/nicol-bolas.jpg",
      active:"inactive",
      title:"Nicol Bolas, le manipulateur",
      author:"Inso",
      content:"content",
      id:10
    },
    {
      path: "assets/images/stories/statue.jpg",
      title:"Les statues ancestrales",
      author:"Inso",
      content:"content",
      active:"inactive",
      id:11
    },
    {
      path:"assets/images/stories/women.jpg",
      title:"Les mages d'innistrad",
      author:"Inso",
      content:"content",
      active:"inactive",
      id:12
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  toggleState(i:number,content:string) {
    for(let s of this.stories) {
      if(s.id != i){
        s.active = 'inactive';
        document.getElementById(s.id+"").classList.remove("on-top");
      }
    }

    this.stories[i].active = this.stories[i].active === 'active' ? 'inactive' : 'active';
    document.getElementById(""+i).classList.add("on-top");
    //this.grid.splice(i,1);
    console.log(this.stories[i].title);
  }

  mouseOverImage(id:string,title:string){
    console.log(id);
  }

}
