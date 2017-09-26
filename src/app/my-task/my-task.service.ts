import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { EntityTask } from '../my-task/entity-task';

@Injectable()
export class MyTaskService {
  private apiUrl = '/task';
  constructor(private http: Http) { }
  
  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
  }
  // GET /task?pageSize=1&pageIndex=5)
  getList(pageSize, pageIndex):Promise<void | EntityTask[]>{
    return this.http.get(this.apiUrl + '?pageSize=' + pageSize +'&pageIndex=' + pageIndex)
               .toPromise()
               .then(Response => Response.json() as EntityTask[])
               .catch(this.handleError);
  }

  //POST /task
  create(newtask: EntityTask): Promise<void | EntityTask>{
    return this.http.post(this.apiUrl,newtask)
               .toPromise()
               .then(Response => Response.json() as EntityTask)
               .catch(this.handleError);
  }
  //DELETE /task/:taskId
  delete(_id: String): Promise<void | String>{
    return this.http.delete(this.apiUrl +'/'+ _id)
               .toPromise()
               .then(Response => Response.json() as String)
               .catch(this.handleError);
  }

}
