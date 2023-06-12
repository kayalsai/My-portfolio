
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  data: any = [];
  constructor() {

  }
  empDetails() {
    this.data = [{ projectName: "payil", DateCreated: "04-08-2001", owner: "kayal", task: "UI Design", createdBy: "sai krishna" },
    { projectName: "Citi", DateCreated: "05-06-2001", owner: "kani", task: "Development", createdBy: "gayu" },
    { projectName: "Learning APP", DateCreated: "04-09-2001", owner: "anu", task: "UI Design & Support", createdBy: "dhava" },
    { projectName: "payil", DateCreated: "04-02-2001", owner: "kayal", task: "Development", createdBy: "sai krishna" },
    { projectName: "LMS ", DateCreated: "05-02-2001", owner: "kani", task: "Testing", createdBy: "krishna" }];
    return this.data
  }
}
