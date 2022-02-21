import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  tableData = [
    {
      id: '001',
      name: 'Santosh Kalathoki',
      address : 'Kapan',
      age : 21,
      class: '01'
    },
    {
      id: '002',
      name: 'Ritesh Thapa',
      address : 'jagdol',
      age : 22,
      class: '02'

    },
    {
      id: '003',
      name: 'Hemaraj Kalathoki',
      address : 'Dang',
      age : 23,
      class: '03'

    },
    {
      id: '004',
      name: 'Paribartan Kalathoki',
      address : 'Maitidevi',
      age : 24,
      class: '04'

    },
  ];

  constructor(
    private router: Router) {
      
    }

  ngOnInit(): void {
  }

  onDetailView(id: string, paramName: string, address: string, age: number){
    this.router.navigate(['/detail-view', id, 'class', id],{
    queryParams: {name: paramName, address: address, age: age},
  });
  }


}
