import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {
  @Input() rows : any;
  public data;
  public pager : any;
  public pageLimit : number = 3;
  constructor() { }

  ngOnInit() {
    debugger;
  }

  ngOnChanges(){
    this.paging(1)
  }


  paging(page){
    this.pager = this.getPager(this.rows.length, page);
    this.data = this.rows.slice(this.pager.startIndex, this.pager.endIndex + 1);

  }

  getPager(totalItems: number, currentPage: number = 1, pageSize: number = 3) {    
    let totalPages = Math.ceil(totalItems / pageSize);
    if (currentPage < 1) { 
        currentPage = 1; 
    } else if (currentPage > totalPages) { 
        currentPage = totalPages; 
    }    
    let startPage: number, endPage: number;
    if (totalPages <= 10) {
        startPage = 1;
        endPage = totalPages;
    } else {
        if (currentPage <= 6) {
            startPage = 1;
            endPage = 10;
        } else if (currentPage + 4 >= totalPages) {
            startPage = totalPages - 9;
            endPage = totalPages;
        } else {
            startPage = currentPage - 5;
            endPage = currentPage + 4;
        }
    }
    let startIndex = (currentPage - 1) * pageSize;
    let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
    let pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);

    return {
        totalItems: totalItems,
        currentPage: currentPage,
        pageSize: pageSize,
        totalPages: totalPages,
        startPage: startPage,
        endPage: endPage,
        startIndex: startIndex,
        endIndex: endIndex,
        pages: pages
    };
}




}
