import { Component } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { doc, setDoc } from 'firebase/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todolist';
  todos$: Observable<any>;
  toDos: Array<any>; //variable item wird immer wieder upgedated! troditionell mit $ geschrieben
  todoText:string = '';


  constructor(private firestore: Firestore) {
    const coll = collection(firestore, 'todos');
    this.todos$ = collectionData(coll);

    //.subscribe -> immer wenn was ändert wird diese Funktion aufgerufen
    this.todos$.subscribe((newToDos) => {
      this.toDos = newToDos;
    })
  }

  addToDo() {
   const coll = collection(this.firestore, 'todos');
   setDoc(doc(coll), {name:this.todoText});
  }


}
