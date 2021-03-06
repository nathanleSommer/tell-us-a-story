import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { CovalentTextEditorModule } from '@covalent/text-editor';
import { NgxMdModule } from 'ngx-md';
import { ToastrModule, ToastContainerModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EditorComponent } from './editor/editor.component';
import { StoryGridComponent } from './story-grid/story-grid.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EditorComponent,
    StoryGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CovalentTextEditorModule,
    NgxMdModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot({ positionClass: 'inline' }),
    ToastContainerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
