import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../user.service';
import { User } from '../../user.service';

@Component({
  selector: 'app-popup-dialog',
  standalone: true,
  templateUrl: './popup-dialog.component.html',
  styleUrl: './popup-dialog.component.css',
  imports: [FormsModule],
})

export class PopupDialogComponent {
  newUser: User = {
    id: 1,
    name: '',
    email: '',
    phone: '',
    age: 1,
    post: '',
    joiningDate: '',
    salary: ''
  };
  @Output() closeModalEvent = new EventEmitter<boolean>();
  @Output() userAddedEvent = new EventEmitter<void>();

  constructor(private userService: UserService) { }

  addUser(): void {
    this.userService.addUser(this.newUser).subscribe(user => {
      console.log('User added', user);
      this.newUser = { id: 1, name: '', email: '', phone: '', age: 1, post: '', joiningDate: '', salary: '' };
      this.userAddedEvent.emit();
      this.closeModal();
    });
  }

  closeModal() {
    this.closeModalEvent.emit(false);
  }
}
