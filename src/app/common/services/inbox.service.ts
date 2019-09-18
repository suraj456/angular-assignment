import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { iInbox, Inbox } from '../models/inbox';
import { map, reduce } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InboxService {

  inboxSubject = new BehaviorSubject<iInbox[]>(Inbox)
  public inbox$ = this.inboxSubject.asObservable()

  constructor(private http : HttpClient) { }


  getInbox(){
    this.http.get('/assets/inbox.json')
    .pipe(map(res => res))
    .subscribe((res : any) => {
      console.log(res);
      this.inboxSubject.next(res.inbox_messages) 
    })
  }



}
