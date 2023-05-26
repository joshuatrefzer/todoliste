import { Component } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todolist';
  todos$: Observable<any>;
  todos:Array<any>; //variable item wird immer wieder upgedated! troditionell mit $ geschrieben
  constructor(firestore: Firestore) {
    const coll = collection(firestore, 'todos');
    this.todos$ = collectionData(coll);

    //.subscribe -> immer wenn was ändert wird diese Funktion aufgerufen
    this.todos$.subscribe((newToDos) => {
      this.todos = newToDos;
    })
  }
}
