import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';
import { DateAdapter } from '@angular/material';
import { EntityTask } from '../my-task/entity-task';
import { MyTaskService } from '../my-task/my-task.service';
import {NgForm} from '@angular/forms';
import { FileUploadComponent } from '../file-upload/file-upload.component'
import { LanguagesService } from "../share-data/languages.service";

@Component({
  selector: 'app-btn-add-task',
  templateUrl: './btn-add-task.component.html',
  styleUrls: ['./btn-add-task.component.css']
})
export class BtnAddTaskComponent implements OnInit {

  constructor(public dialog: MdDialog, private lang : LanguagesService) { }

  ngOnInit() {
  }
  openDialog(): void {
    let dialogRef = this.dialog.open(AddTaskDialog, {
      width: '250px',
      data :{
        lang : this.lang
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
@Component({
  selector: 'add-task-dialog',
  templateUrl: 'add-task-dialog.html',
  styles:["#add-form{padding: 10px 30px;} app-file-upload{max-height: 150px;} #add-form input{width: 140px}, "],
  providers: [MyTaskService, FileUploadComponent]
})
export class AddTaskDialog implements OnInit{

  picker = new Date;
  // @Output() eEvent = new EventEmitter<Boolean>()
  constructor(
    public dialogRef: MdDialogRef<AddTaskDialog>,
    @Inject(MD_DIALOG_DATA) public data: any,
    private myTaskService: MyTaskService,
    private fileUp: FileUploadComponent,
    private lang: LanguagesService, ) { 
    this.lang = data.lang;
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
  createTask(f:NgForm){
    var task: EntityTask = {
      _id: '',
      subject: f.controls['subject'].value,
      time: f.controls['time'].value,
      username: 'admin',
      imgURL:[{url:''}],
  }
  
    this.myTaskService.create(task);
    // this.eEvent.emit(true);
  }


  placeholderSubLbl : String;
  placeholderTimeLbl : String;
  newTaskLbl: String;
  uploadLbl: String;
  saveLbl: String;
  ngOnInit() {
    this.lang.currentLanguges.subscribe(message => this.newTaskLbl = message['newTask']);
    this.lang.currentLanguges.subscribe(message => this.uploadLbl = message['upload']);
    this.lang.currentLanguges.subscribe(message => this.saveLbl = message['save']);
    this.lang.currentLanguges.subscribe(message => this.placeholderSubLbl = message['placeHolderSub']);
    this.lang.currentLanguges.subscribe(message => this.placeholderTimeLbl = message['placeHolderTime']);
  }
}