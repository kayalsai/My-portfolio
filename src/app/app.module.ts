import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { SkillComponent } from './skill/skill.component';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { ImageCropperModule } from 'ngx-image-cropper';
import { HttpClientModule } from '@angular/common/http';
import { WatchComponent } from './watch/watch.component';
import { Router, RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { UpdatedialogComponent } from './updatedialog/updatedialog.component';
import { MatIconModule } from '@angular/material/icon';
import { TodoComponent } from './todo/todo.component';
import {MatInputModule} from '@angular/material/input';
@NgModule({
  declarations: [
    AppComponent,
    SkillComponent,
    AboutComponent,
    ResumeComponent,
    SearchComponent,
    WatchComponent, TodoComponent,
    UpdatedialogComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule
    , MatMenuModule,
    MatFormFieldModule,
    FormsModule,
    ImageCropperModule,
    HttpClientModule, MatDialogModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
