import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { FormValidatorsService } from 'src/app/form-validators.service';

@Component({
  selector: 'abanca-form-movement',
  templateUrl: './form-movement.component.html',
  styleUrls: ['./form-movement.component.css']
})
export class FormMovementComponent {
  newMovementForm: FormGroup;
    private newMovement = {
    description: '',
    amount: '',
    date: '',
    conceptType: '',
    type: ''
    };

constructor(formBuilder: FormBuilder, private formValidators: FormValidatorsService) {
  this.newMovementForm = formBuilder.group({
    description: [this.newMovement.description, [Validators.required, Validators.minLength(4)]],
    amount: [this.newMovement.amount, [Validators.required, Validators.min(0)]],
    date: [this.newMovement.date, Validators.required],
    conceptType: [this.newMovement.conceptType, Validators.required],
    type: [this.newMovement.type, Validators.required]

  });
}


  onSubmit() {
    alert(JSON.stringify(this.newMovementForm.value));
    this.newMovementForm.disable();
    document.getElementById('edit').style.display = 'block';
  }

  hasErrors(controlName: string) {
    return this.formValidators.hasErrors(this.newMovementForm, controlName);
  }
  isTouched(controlName: string) {
    return this.newMovementForm.controls[controlName].touched;
  }
  detectError(controlName: string, errorName: string) {
    return this.formValidators.hasError(this.newMovementForm, controlName, errorName);
  }
}







