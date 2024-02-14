import { Component } from '@angular/core';
import { AddNewContentComponent } from '../../add-new-content/add-new-content.component';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialog,
  MatDialogModule,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { PopupDialogComponent } from '../popup-dialog/popup-dialog.component'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../../user.service';
import { User } from '../../user.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})

export class TableComponent {

  users: User[] = [];
  tableHead: string[] = ["Name", "Email", "Phone", "Age", "Post", "Joining Date", "Actions", "", ""];

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(users => this.users = users);
  }

  deleteUser(id: number, event: MouseEvent): void {

    event.preventDefault();
    this.userService.deleteUser(id).subscribe({
      next: () => {
        this.users = this.users.filter(user => user.id !== id);
      },
    });

  }

  checkUser(id: number, event: MouseEvent): void {
    event.preventDefault();
    this.userService.checkUser(id).subscribe(response => {
      console.log(response.data)
    });
  }

  checkAllUser(event: MouseEvent): void {
    event.preventDefault();
    this.userService.checkAllUser().subscribe(response => {
      console.log(response)
    });
  }


  constructor(public dialog: MatDialog, private userService: UserService) { }

  openPopup() {
    const dialogRef = this.dialog.open(PopupDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.dialog.open(PopupDialogComponent)
      console.log(`Dialog result: ${result}`);

    });
  }

}
