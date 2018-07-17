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
  storyTag:string = '';
  hasNoTag:boolean = false;

  editorOptions: any = {
    placeholder : "C'est ici que commence l'histoire ...",
    spellChecker: false
  };

  constructor() { }

  ngOnInit() {
  }

  submitText() {
    if(this.storyTag == ''){
      alert("Mets un tag.");
      this.hasNoTag = true;

    } else {
      true;
      this.storyContent = this._textEditor["_value"];
      let JSONStoreStory = "{ \"tag\": \""+this.storyTag+"\",\"content\":\""+this.storyContent+"\"}";
      console.log(JSONStoreStory);
      let JSONObject = JSON.parse(JSONStoreStory);
      console.log(JSONObject);

      //HTTP REQUEST
    }
  }
}