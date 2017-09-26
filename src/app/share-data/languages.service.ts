import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LanguagesService {
  private languages = new BehaviorSubject<any>([]);
  currentLanguges = this.languages.asObservable();

  public lang : JSON
  private data = {
    "en-vn":{
        "skip": "Bỏ qua",
        "greeting1": "Công cụ theo dõi công việc tuyệt vời cho bạn",
        "greeting2": "Bắt đầu nào",
        "myTask": "Lịch đã hẹn",
        "newTask": "Thêm mới",
        "upload": "Tải lên",
        "save": "Lưu"
    },
    "en-us":{
        "skip": "Skip",
        "greeting1": "Manage your tasks better than ever before",
        "greeting2": "Never be late",
        "myTask": "My task",
        "newTask": "New Task",
        "upload": "Upload",
        "save": "Save"
    }
}

  // private handleError (error: any) {
  //   let errMsg = (error.message) ? error.message :
  //   error.status ? `${error.status} - ${error.statusText}` : 'Server error';
  //   console.error(errMsg); // log to console instead
  // }

  constructor(private http: Http) { 
    
  }

  //   // GET /file/languages)
  // getLanguges():Promise<void | JSON>{
  //     return this.http.get('/file/languages')
  //                .toPromise()
  //                .then(Response => Response.json() as JSON)
  //                .catch(this.handleError)
  //   }
  // getFirst(){
  //   this.getLanguges().then((data:JSON)=>{
  //     return 
  //   })
  // }
  changeLanguages(lng: any) { 
    this.lang = this.data[lng]; 
    this.languages.next(this.lang);
  }
}
