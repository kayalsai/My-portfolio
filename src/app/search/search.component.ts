import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  test:any="test";
  datum:any;

  constructor(private service:ApiService,private router:Router) { }
  ngOnInit(): void {
    this.tableData();
  }
  table() {

  }
  tableData(){
      this.datum=this.service.empDetails();
      console.log(this.datum)
  }
  watch(){
    this.router.navigate(['/watch']);
  }
}
