import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-first';

  //https://bobbyhadz.com/blog/typescript-binding-element-implicitly-has-an-any-type
  //Manejo de destructuring con parámetros opcionales y valores x default.
  getData({
    id,
    name,
    surname
  }:{
    id?:number,
    name?:string,
    surname?:string
  }){
    id=id || 0
    name=name || ''
    surname=surname||''

    console.log("id:" + id.toString() + " name: " + name + " surname: " + surname);
  }

  // getData($event:any){
  //   console.log("Hola");
    
  // }

}
