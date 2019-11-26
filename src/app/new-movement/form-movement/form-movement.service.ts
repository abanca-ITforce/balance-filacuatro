import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormMovementService {

  constructor() { }
  save(movement) {
    alert(JSON.stringify(this.newMovementForm.value));
    this.newMovementForm.disable();
    document.getElementById('edit').style.display = 'block';
  }

}
