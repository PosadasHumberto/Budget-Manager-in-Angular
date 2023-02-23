import {Component, Input, OnInit} from '@angular/core';
import {Egreso} from "./egreso.model";
import {EgresoService} from "./egreso.service";

@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrls: ['./egreso.component.css']
})
export class EgresoComponent implements OnInit {

  //Atributos
  egresos : Egreso[];

  @Input()
  ingresoTotal : number;

  //constructor
  constructor(private egresoService : EgresoService) { }

  ngOnInit(): void {
    //inicialilzar el arreglo egresos con los valores presentes en el arreglo
    //egresos del EgresosService por referencia
    this.egresos = this.egresoService.egresos;
  }

  //métodos
  eliminarEgreso(egreso : Egreso){
    this.egresoService.eliminarEgr(egreso);
  }

  calcularPorcentajeEgreso(egr : Egreso) : number{
    return egr.valor/this.ingresoTotal;
  }
}
