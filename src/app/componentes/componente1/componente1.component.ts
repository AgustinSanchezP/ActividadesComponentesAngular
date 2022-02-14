import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit {

  curso1 = {'nombre':'Beca Angular', 'total_días':9, 'descripcion':'Curso sobre Angular y Typescript'};

  curso2 = {'nombre':'Beca Java', 'total_días':10, 'descripcion':'Formación sobre Java'};

  contador: number = 0;


  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.

    for(const propName in changes){
      const chng = changes[propName];
      const cur = JSON.stringify(chng.currentValue);
      const prev = JSON.stringify(chng.previousValue);
      this.changeLog.push(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  eventoBotonAngular(){
    this.contador = this.contador + 1;
  }

}
