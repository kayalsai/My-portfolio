import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit{

  getValue:any;
  todoDta:string[]=[];
  constructor(){}
  ngOnInit():void{
    
  }
  // getValue(event:any){
  //   // console.log(event.target.value)
  //   this.getInputValue=event.target.value;
  //   this.getdata+=this.getInputValue;
 
  //   console.log(this.getdata,"get")
  // }
  listValue(){
    this.todoDta.push(this.getValue);
    this.getValue=''
  }
  deleteValue(){
    this.todoDta.splice(0,1)
  }
}
