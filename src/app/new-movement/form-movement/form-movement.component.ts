import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

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

constructor(formBuilder: FormBuilder){
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
  }
}







