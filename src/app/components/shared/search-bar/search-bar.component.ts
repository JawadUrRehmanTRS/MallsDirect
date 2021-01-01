import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  constructor() { }
  @Input() type: number;
  @Input() searchTerm: string;
  @Output() searchString: EventEmitter<any> = new EventEmitter();
  @Output() searchTermChange: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
  }

  search() {
    this.searchTermChange.emit(this.searchTerm);
    } 
  

}
