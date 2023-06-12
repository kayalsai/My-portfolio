import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  constructor(private router:Router){}
  ngOnInit(): void {
    
  }
  resume(){
    this.router.navigate(['/resume']);
  }
  searchWord(){
    this.router.navigate(['/search'])
  }

}
