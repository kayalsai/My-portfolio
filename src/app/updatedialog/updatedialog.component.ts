import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TodoComponent } from '../todo/todo.component';
@Component({
  selector: 'app-updatedialog',
  templateUrl: './updatedialog.component.html',
  styleUrls: ['./updatedialog.component.css']
})
export class UpdatedialogComponent implements OnInit {


  ngOnInit(): void {

  }
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<TodoComponent>
  ) { }
  onCancel(){
    this.dialogRef.close();
  }
  getData(){
    
  }
}
