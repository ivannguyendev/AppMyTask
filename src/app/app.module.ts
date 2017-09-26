import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent, AppGreetingComponent } from './app.component';
import { MyTaskComponent } from './my-task/my-task.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import {MdMenuModule, 
  MdButtonModule,
  MdToolbarModule,
  MdIconModule,
  MdCardModule,
  MdDialogModule,
  MdGridListModule,
  MdDatepickerModule,
  MdNativeDateModule,
  MdSelectModule} from '@angular/material';
import { ToolbarBottomComponent } from './toolbar-bottom/toolbar-bottom.component';
import { ToolbarTopComponent } from './toolbar-top/toolbar-top.component';
import { BtnAddTaskComponent,  AddTaskDialog } from './btn-add-task/btn-add-task.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { PreviewImgUploadDirective } from './file-upload/preview-img-upload.directive';
import { FileUploadModule } from 'ng2-file-upload';
import {NgClass, NgStyle} from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { LanguagesService } from "./share-data/languages.service";

@NgModule({
  declarations: [
    AppComponent,
    AppGreetingComponent, 
    ToolbarBottomComponent,
    ToolbarTopComponent,
    MyTaskComponent,
    BtnAddTaskComponent,
    AddTaskDialog,
    FileUploadComponent,
    PreviewImgUploadDirective,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdMenuModule,
    MdButtonModule,
    MdToolbarModule,
    MdIconModule,
    MdCardModule,     
    FileUploadModule,
    HttpModule,
    AppRoutingModule,
    MdDatepickerModule,
    MdNativeDateModule,
    FormsModule,
    MdSelectModule,
  ],
  exports: [
    MdMenuModule, 
    MdButtonModule,
    MdToolbarModule,
    MdIconModule,
    MdCardModule,
    MdDialogModule
  ],
  entryComponents: [AddTaskDialog],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [ LanguagesService],
  bootstrap: [AppComponent,]
})

export class AppModule { }
