import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {

  showEcommerceSubmenu: boolean = false;
  showToDoListSubmenu: boolean = false;
  showEmailSubmenu: boolean = false;

  toggleEcommerceSubmenu(event: Event): void {
    event.preventDefault();
    this.showEcommerceSubmenu = !this.showEcommerceSubmenu;
  }

  toggleEmailSubmenu(event: Event): void {
    event.preventDefault();
    this.showEmailSubmenu = !this.showEmailSubmenu;
  }

  toggleToDoListSubmenu(event: Event): void {
    event.preventDefault();
    this.showToDoListSubmenu = !this.showToDoListSubmenu;
  }

  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'New',
        icon: 'pi pi-fw pi-plus',
      },
      {
        label: 'Delete',
        icon: 'pi pi-fw pi-trash'
      }
    ];
  }
}
