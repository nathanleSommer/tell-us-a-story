import { Component, OnInit } from '@angular/core';
import { CovalentTextEditorModule } from '@covalent/text-editor';
import { ViewChild } from '@angular/core';

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

  editorOptions: any = {
    placeholder : "C'est ici que commence l'histoire ...",
    spellChecker: false
  };

  constructor() { }

  ngOnInit() {
  }

  submitText() {
    if(this.storyAuthor == ''){
      alert("Auteur requis.");
      this.hasNoAuthor = true;
    } else if(this.storyTitle == '') {
      alert("Titre requis.");
      this.hasNoTitle = true;
    } else {
      true;
      this.storyContent = this._textEditor["_value"];
      let JSONStoreStory = "{ \"title\" : \""+this.storyTitle +"\" \"author\": \""+this.storyAuthor+"\",\"content\":\""+this.storyContent+"\"}";
      console.log(JSONStoreStory);
      let JSONObject = JSON.parse(JSONStoreStory);
      console.log(JSONObject);

      //HTTP REQUEST
    }
  }
}