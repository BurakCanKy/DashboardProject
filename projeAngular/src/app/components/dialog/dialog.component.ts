import { Component,OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MatDialogModule,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css',

})
export class DialogComponent implements OnInit{
  constructor(public dialogRef: MatDialogRef<DialogComponent>) { }

  ngOnInit(): void {
  }

  closePopup(): void {
    this.dialogRef.close();
  }
}
