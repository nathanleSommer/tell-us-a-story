import { Component, OnInit } from '@angular/core';
import { CovalentTextEditorModule } from '@covalent/text-editor';
import { ViewChild } from '@angular/core';

import { Story } from '../story/story';
import { StoryService } from '../story/story.service';


import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  @ViewChild('textEditor') private _textEditor: CovalentTextEditorModule;

  storyContent:string = '';
  storyAuthor:string = '';
  hasNoAuthor:boolean = false;

  storyTitle:string = '';
  hasNoTitle:boolean = false;

  storyImageURL:string = '';

  editorOptions: any = {
    placeholder : "C'est ici que commence l'histoire ...",
    spellChecker: false
  };

  constructor(private storyService: StoryService, private toastr: ToastrService) { }

  ngOnInit() {
  }

  submitText() {
    this.toastr.clear();
    if(this.storyAuthor == ''){
      this.toastr.error('Auteur requis.');
      this.hasNoAuthor = true;
    } else {
      this.hasNoAuthor = false;
    }
    if(this.storyTitle == '') {
      this.toastr.error('Titre requis.');
      this.hasNoTitle = true;
    } else {
      this.hasNoTitle = false;
    }

    if(!this.hasNoAuthor && !this.hasNoTitle) {

      this.storyContent = this._textEditor["_value"];
      let story = "{"+
          "\"path\" : \""+this.storyImageURL+"\","+
          "\"title\" : \""+this.storyTitle +"\","+
          "\"author\": \""+this.storyAuthor+"\","+
          "\"content\":\""+this.storyContent+"\","+
          "\"active\":\"inactive\""+
        "}";
      let JSONStory = JSON.parse(story);
      console.log(JSONStory);
      //add to service data
      this.storyService.addStory(JSONStory);
      this.toastr.clear();
      //if success
      this.toastr.success('Histoire ajoutée !');
    }
  }
}