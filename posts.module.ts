import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostComponent } from '../post/post.component';
import { PostsComponent } from './posts.component';
// import { AppModule } from '../app.module';




@NgModule({
  declarations: [PostComponent, PostsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [PostsComponent]

})
export class PostsModule { }
