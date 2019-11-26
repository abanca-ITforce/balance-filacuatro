import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormMovementService {

  movementsList;

  constructor() {

    const temp = localStorage.getItem('movementsList');
    if (temp) {
      this.movementsList = JSON.parse(temp);

    } else {
      this.movementsList = [];
    }
  }
  postMovement(movement) {
    console.log('passo 2');
    this.movementsList.push(movement);
    localStorage.setItem('movementsList', JSON.stringify(this.movementsList));
    console.log(JSON.stringify(movement));
  }
}
