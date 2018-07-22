import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { EditorComponent } from './editor/editor.component';
import { StoryGridComponent } from './story-grid/story-grid.component';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'editor',
    component:EditorComponent
  },
  {
    path:'story-grid',
    component:StoryGridComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
