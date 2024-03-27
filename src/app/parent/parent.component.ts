import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  parentForm: FormGroup;
  formFields: string[] = [];

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.parentForm = this.fb.group({});
  }

  // addMoreField(value: any) {
  //   const newControl = <FormArray>this.parentForm.controls['fields'];
  //   newControl.push(new FormControl(value));
  // }

  addField(data: string) {
    this.formFields.push(data);
    this.parentForm.addControl(data, this.fb.control(''));
  }

}