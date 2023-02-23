import { Component, OnInit } from '@angular/core';
import {IngresoService} from "../ingreso/ingreso.service";
import {EgresoService} from "../egreso/egreso.service";
import {Ingreso} from "../ingreso/ingreso.model";
import {Egreso} from "../egreso/egreso.model";

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  //atributos
  descripcionInput : String;
  valorInput : number;
  tipo : String = "ingresoOperacion"

  //constructor
  constructor(
    private ingresoService : IngresoService,
    private egresoService : EgresoService
  ) { }

  ngOnInit(): void {
  }

  //métodos
  tipoOperacion(evento){
    //asignamos al atributo tipo el identificador del option que este seleccionado
    this.tipo = evento.target.value;
  }

  agregarValor(){

    //cuando el valor es un ingreso
    if (this.tipo === "ingresoOperacion"){
      //creando un objeto de tipo Ingreso
      let ingreso : Ingreso = new Ingreso(this.descripcionInput, this.valorInput);
      //agregando el ingreso al arreglo Ingresos del Service
      this.ingresoService.agregarIngreso(ingreso);
    } else {

      //creando el objeto de tipo Egreso
      let egreso : Egreso = new Egreso(this.descripcionInput, this.valorInput);
      //agregando el egreso al arreglo egresos del Service
      this.egresoService.agregaregreso(egreso);
    }
  }

}
