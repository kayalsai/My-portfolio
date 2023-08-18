import { Component, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { UpdatedialogComponent } from '../updatedialog/updatedialog.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})


export class TodoComponent implements OnInit {

  getValue: any;
  todoDta: string[] = [];
  res: any;
  response: any;
  result: any;
  obj: any;
  test: boolean = true;
  constructor(private dialog: MatDialog) { }
  ngOnInit(): void {
    console.log(this.todoDta.length, "length");
  }
  listValue() {

    if (this.getValue.trim() !== '') {
      this.todoDta.push(this.getValue);
      this.getValue = ''
    }


  }
  deleteValue(i: number) {

    if (i >= 0 && i < this.todoDta.length) {
      this.todoDta.splice(i, 1);
    }
  }
  editValue(i: number, newData: string) {
    console.log(i, newData, "i");
    const dialogRef = this.dialog.open(UpdatedialogComponent, {
      width: '400px',
      height: '200px',
      data: {
        datum: newData
      }
    })
    dialogRef.afterClosed().subscribe(result => {
      console.log('dialog closed', result)
      this.obj = result;
      console.log(this.obj['datum'], "res")
      if (result && this.test == true) {
        newData = this.obj['datum'];
        console.log(this.todoDta, "todo")
        this.todoDta[i] = newData;

      }
    })

  }

}
