import { Component, OnInit,  } from '@angular/core';

import { EntityTask } from './entity-task';
import { MyTaskService } from './my-task.service';

@Component({
  selector: 'app-my-task',
  templateUrl: './my-task.component.html',
  styleUrls: ['./my-task.component.css'],
  providers: [MyTaskService,]
})
export class MyTaskComponent implements OnInit {

  constructor(private myTaskService:MyTaskService, ) { }

  listTask: EntityTask[];
  pageSize = 10;
  pageIndex = 1;
  delId ='';
  getList(pageSize, pageIndex):void{
        this.myTaskService
        .getList(pageSize, pageIndex)
        .then((ListTask : EntityTask[]) => {
          this.listTask = ListTask.map((task)=>{
            if(!task._id){
              task._id = '';
            }
            return task;
          })
        }
      
    );
  }
  // reload($event){
  //   if($event){
  //     this.getList(this.pageSize, this.pageSize);
  //   }
  // }
  delete(delTask : EntityTask):void{
    this.myTaskService
    .delete(delTask._id)
    .then(() => {
      // var index = this.listTask.indexOf(delTask)
      // return this.listTask.splice(index,1);
      this.getList(this.pageSize, this.pageIndex);
    }
  );
}
create(task:EntityTask):void{
  this.myTaskService
  .create(task)
  .then(() => {
        this.getList(this.pageSize, this.pageIndex);
  }
);
  this.getList(this.pageSize, this.pageIndex);
}
getImg():void{
  
}
  ngOnInit() {
   
    this.getList(this.pageSize, this.pageIndex);
    
  }

}
