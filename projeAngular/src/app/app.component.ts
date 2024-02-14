import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserService } from './user.service';
import { User } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'projeAngular';

  isModalOpen: boolean = false;

  users: User[] = [];



  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(users => this.users = users);
  }

  deleteUser(userId: number, event: MouseEvent): void {
    event.preventDefault();

    if (confirm('Are you sure you want to delete this user?')) {
      this.userService.deleteUser(userId).subscribe({
        next: (resp) => {
          this.users = this.users.filter(user => user.id !== userId);
          console.log('User deleted successfully');
        },
        error: (err) => {
          console.error('Error deleting user:', err);
        }
      });
    }
  }

  updateUser(userId: number, event: MouseEvent): void {
    event.preventDefault(); 
    if (confirm('Are you sure you want to delete this user?')) {
      this.userService.updateUser(userId).subscribe({
        next: (resp) => {
          this.users = this.users.filter(user => user.id !== userId);
          console.log('User deleted successfully');
        },
        error: (err) => {
          console.error('Error deleting user:', err);
        }
      });
    }
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal(event: boolean) {
    this.isModalOpen = event;

  }

}
