import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FormMovementService {


  private urlTransaction = 'https://api-base.herokuapp.com/api/pub/transactions';
  movementsList: any[];

  constructor(private http: HttpClient) {

  //   const temp = localStorage.getItem('movementsList');
  //   if (temp) {
  //     this.movementsList = JSON.parse(temp);

  //   } else {
  //     this.movementsList = [];
  //   }
  }
getMovement$() {
  return this.http.get<any[]>(this.urlTransaction).pipe(map(data => (data ? data : [])));
}

  postMovement(movement) {
    this.http.post(this.urlTransaction, movement).subscribe({
      next: resposta => this.http.get<any[]>(this.urlTransaction).subscribe(data => (this.movementsList = data ? data : []))
    }
    );
    // console.log('passo 2');
    // this.movementsList.push(movement);
    // localStorage.setItem('movementsList', JSON.stringify(this.movementsList));
    // console.log(JSON.stringify(movement));
  }
}
