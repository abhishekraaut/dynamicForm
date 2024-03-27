import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  parentForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.parentForm = this.fb.group({
      fields: this.fb.array([
        // this.fb.group({})
      ])
    });
  }

  ngOnInit(): void {
  }

  addMoreField(value: any) {
    const newControl = <FormArray>this.parentForm.controls['fields'];
    newControl.push(new FormControl(value));
  }
}