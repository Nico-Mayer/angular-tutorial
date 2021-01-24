import { Component, OnInit } from '@angular/core';
import { ToDo } from '../_interface/todo'
import { EventPing } from '../_interface/eventping'

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.sass']
})
export class PageListComponent implements OnInit {

  public toDoShow: boolean;
  public toDoDoneShow: boolean;
  public $todos: ToDo[];
  //public $todosDone: ToDo[];

  constructor() { 
    this.toDoShow = true;
    this.toDoDoneShow = true;
    this.$todos = [
      {
        id: 0,
        label: 'test',
        status: false,
        position: 1
      },
      {
        id: 0,
        label: 'test',
        status: false,
        position: 1
      },
      {
        id: 0,
        label: 'test',
        status: false,
        position: 1
      },
      {
        id: 0,
        label: 'test',
        status: false,
        position: 1
      },
      {
        id: 0,
        label: 'test',
        status: false,
        position: 1
      }
    ];

  }
    
  ngOnInit(): void {
  }

}
