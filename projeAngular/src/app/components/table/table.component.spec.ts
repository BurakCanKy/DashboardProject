import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  selectItem: string = 'p-4 border-b border-blue-gray-50';
  tableHead: string[] = ["Name", "Email", "Phone", "Age", "Post", "Joining Date", "Salary", "Actions", ""];
  tableRows: any[] = [
    {
      name: "Arden Spencer",
      email: "Evangeline62@yahoo.com",
      phone: "(023) 708-6818 x4267",
      age: "28",
      post: "UX Researcher",
      joiningDate: "June 20, 2015",
      Salary: "$26253"
    },
    {
      name: "Favian Maggio DDS",
      email: "Electa_Conroy@hotmail.com",
      phone: "1-076-628-3095 x7154",
      age: "28",
      post: "UX Researcher",
      joiningDate: "October 11, 2019",
      Salary: "$26253"
    },
    {
      name: "Jacey Considine",
      email: "Garry23@yahoo.com",
      phone: "1-016-234-2482",
      age: "28",
      post: "UX Researcher",
      joiningDate: "January 2, 2016",
      Salary: "$6162"
    },
    {
      name: "Kolby Torphy II",
      email: "Phyllis75@hotmail.com",
      phone: "1-345-656-4163 x373",
      age: "28",
      post: "UX Researcher",
      joiningDate: "August 9, 2017",
      Salary: "$4022"
    },
    {
      name: "Mattie Daugherty",
      email: "Jessika.Conroy@yahoo.com",
      phone: "721-969-9795 x09197",
      age: "28",
      post: "UX Researcher",
      joiningDate: "December 24, 2016",
      Salary: "$11588"
    },
    {
      name: "Timothy Littel",
      email: "Nannie_Kling49@hotmail.com",
      phone: "1-251-141-2444 x275",
      age: "28",
      post: "UX Researcher",
      joiningDate: "February 8, 2019",
      Salary: "$14283"
    },
    {
      name: "Karli Braun",
      email: "Ruthe_Gleichner@gmail.com",
      phone: "697.704.7326",
      age: "28",
      post: "UX Researcher",
      joiningDate: "October 25, 2016",
      Salary: "$13329"
    }
  ];

  changeSelectItem() {
    console.log('asd');
  }

  getCellClass(index: number, row: any) {
    return row.selected ? 'bg-gray-200 p-4 border-b border-blue-gray-50' : 'p-4 border-b border-blue-gray-50';
  }
}