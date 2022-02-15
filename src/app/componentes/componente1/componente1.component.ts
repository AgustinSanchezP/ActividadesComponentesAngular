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

  newCurso1Nombre = this.curso2.nombre;
  newCurso1Desc = this.curso2.descripcion;

  newCurso2Nombre = this.curso1.nombre;
  newCurso2Desc = this.curso1.descripcion;

  constructor() { }

  ngOnInit(): void {
  }

  eventoBotonAngular(){
    this.contador = this.contador + 1;

    if(this.curso1.nombre == this.newCurso2Nombre){
      this.curso1.nombre = this.newCurso1Nombre;
      this.curso1.descripcion = this.newCurso1Desc;
      this.curso2.nombre = this.newCurso2Nombre;
      this.curso2.descripcion = this.newCurso2Desc;
    }else{
      this.curso1.nombre = this.newCurso2Nombre;
      this.curso1.descripcion = this.newCurso2Desc;
      this.curso2.nombre = this.newCurso1Nombre;
      this.curso2.descripcion = this.newCurso1Desc;
    }
  }

}
