import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userDetails = 
    {
      id: '001',
      name: 'Santosh Kalathoki',
      address : 'Kapan',
      age : 21,
      class: '01'
    };
    
  constructor() { }

  ngOnInit(): void {
  }

}
