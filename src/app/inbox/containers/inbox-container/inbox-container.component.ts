import { Component, OnInit } from '@angular/core';
import { InboxService } from 'src/app/common/services/inbox.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inbox-container',
  templateUrl: './inbox-container.component.html',
  styleUrls: ['./inbox-container.component.scss']
})
export class InboxContainerComponent implements OnInit {

  public inbox$ : Observable<any>
  constructor(private inboxService : InboxService) { }

  ngOnInit() {
    this.inboxService.getInbox();
    this.inbox$ = this.inboxService.inbox$
  }

}
