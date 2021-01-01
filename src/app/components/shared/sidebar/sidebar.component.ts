import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public msgs:any[] = [
    {id: 1, text: 'Sentence 1'},
    {id: 2, text: 'Sentence 2'},
    {id: 3, text: 'Sentence 3'},
    {id: 4, text: 'Sentenc4 '},
    {id: 4, text: 'Sentenc4 '},
    {id: 4, text: 'Sentenc4 '},
    
];
  active = 1;
  check:boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
