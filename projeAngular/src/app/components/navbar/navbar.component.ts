import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  currentHour: number;
  currentMinute: number;
  currentDay: string;
  currentDayNumber: number;
  currentMonth: string;
  currentDate: Date;
  currentYear: string;

  constructor() {
    this.currentDate = new Date();
    this.currentHour = this.currentDate.getHours();
    this.currentMinute = this.currentDate.getMinutes();
    this.currentDayNumber = this.currentDate.getDate();
    this.currentDay = this.getDayOfWeek(this.currentDate.getDay());
    this.currentMonth = this.getMonthOfYear(this.currentDate.getMonth());
    this.currentYear = this.getMonthOfYear(this.currentDate.getUTCFullYear());

  }

  getDayOfWeek(dayIndex: number): string {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[dayIndex];
  }

  getMonthOfYear(monthIndex: number): string {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[monthIndex];
  }
}
