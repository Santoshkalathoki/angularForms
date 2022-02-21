import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {
  templateFormData: any={};
  submitted:boolean = false;
  constructor() {

  }

  ngOnInit(): void {
    
  }

  signUp(form:any): void {
    this.submitted = true;
    console.log(form.value);
  }
}


