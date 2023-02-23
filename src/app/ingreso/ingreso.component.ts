import { Component, OnInit } from '@angular/core';
import {Ingreso} from "./ingreso.model";
import {IngresoService} from "./ingreso.service";

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {

  //Atributos
  ingresos : Ingreso[];

  //Constructor
  constructor(private ingresoService : IngresoService) { }

  ngOnInit(): void {
    //inicializar el arreglo de ingresos con los datos presentes en el arreglo
    //de ingresos del servicio IngresoService
    this.ingresos = this.ingresoService.ingresos;
  }

  //Métodos
  eliminarRegistro(ingreso : Ingreso){
    this.ingresoService.eliminarIngreso(ingreso);
  }
}
