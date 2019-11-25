import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'abanca-new-movement',
  templateUrl: './new-movement.component.html',
  styleUrls: ['./new-movement.component.css']
})
export class NewMovementComponent implements OnInit {

  constructor(formBuilder : FormBuilder) {
    formBuilder.group({

    })
  }

  ngOnInit() {
  }

}





