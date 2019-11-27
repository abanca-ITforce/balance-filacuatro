import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormMovementService } from './form-movement/form-movement.service';


@Component({
  selector: 'abanca-new-movement',
  templateUrl: './new-movement.component.html',
  styleUrls: ['./new-movement.component.css']
})
export class NewMovementComponent implements OnInit {

  constructor(formBuilder: FormBuilder, private formMovementService: FormMovementService ) {
    formBuilder.group({

    });
  }

  ngOnInit() {
  }

  onNewMovementPost(movement) {
  this.formMovementService.postMovement(movement);
  }
}





