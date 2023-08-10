import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  getValue: any;
  todoDta: string[] = [];
  constructor() { }
  ngOnInit(): void {
    console.log(this.todoDta.length, "length")
  }
  listValue() {
    this.todoDta.push(this.getValue);
    this.getValue = ''
  }
  deleteValue(i: number) {

    if (i >= 0 && i < this.todoDta.length) {
      this.todoDta.splice(i, 1);
    }
  }
  editValue(i: number,newItem:string) {
    console.log(i,newItem, "i");
    
  }
}
