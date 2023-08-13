import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillComponent } from './skill/skill.component';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { SearchComponent } from './search/search.component';
import { WatchComponent } from './watch/watch.component';
import { TodoComponent } from './todo/todo.component';


const routes: Routes = [
  {
  path:'skills',component:SkillComponent
  },
  {
    path:'',component:AboutComponent
  },
  {
   path:'resume',component:ResumeComponent
  },
  {
    path:'search',component:SearchComponent
  },
  {
    path:'watch',component:WatchComponent
  },
  {
    path:'todo',component:TodoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
