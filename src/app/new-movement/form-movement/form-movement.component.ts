import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { FormValidatorsService } from 'src/app/form-validators.service';
import { FormMovementService } from './form-movement.service';

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
    concept: '',
    type: ''
    };



constructor(formBuilder: FormBuilder, private formMovementService: FormMovementService, private formValidators: FormValidatorsService) {

  this.newMovementForm = formBuilder.group({
    description: [this.newMovement.description, [Validators.required, Validators.minLength(4)]],
    amount: [this.newMovement.amount, [Validators.required, Validators.min(0)]],
    date: [this.newMovement.date, Validators.required],
    concept: [this.newMovement.concept, Validators.required],
    type: [this.newMovement.type, Validators.required]

  });
}
  @Output() post = new EventEmitter<any>();


  onSubmit() {

    this.post.emit(this.newMovementForm.value);
    console.log('passo 1');
  }

  hasErrors(controlName: string) {
    return this.formValidators.hasErrors(this.newMovementForm, controlName);
  }
  isTouched(controlName: string) {
    return this.formValidators.isTouched(this.newMovementForm, controlName);
  }
  detectError(controlName: string, errorName: string) {
    return this.formValidators.hasError(this.newMovementForm, controlName, errorName);
  }
}







