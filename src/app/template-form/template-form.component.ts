import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {
  templateFormData: any={};
  constructor() {}

  ngOnInit(): void {}

  signUp(): void {
    console.log(this.templateFormData.valid);
  }
}


