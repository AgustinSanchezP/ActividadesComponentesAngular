import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css']
})
export class Componente2Component implements OnInit {

  @Input("datosC2") datosPasadosAlC2: any;
  @Input("contadorC2") contadorPasadoAlC2: any;

  constructor() { }

  ngOnInit(): void {
  }

}
