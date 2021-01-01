import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  pageSize: number;
  @Output() reload: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  parentReload(){
    this.reload.emit(this.pageSize);
  }

}
