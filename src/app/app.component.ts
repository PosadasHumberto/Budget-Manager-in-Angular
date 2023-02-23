import {Component, OnInit} from '@angular/core';
import {Ingreso} from "./ingreso/ingreso.model";
import {Egreso} from "./egreso/egreso.model";
import {IngresoService} from "./ingreso/ingreso.service";
import {EgresoService} from "./egreso/egreso.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  /*
  * Este es el componente padre el cual va a contener:
  * el presupuesto total disponible = ingresos totales - egresos totales
  * ingreso total el cual es la suma de cada elemento en ingresos[],
  * egreso total el cual es la suma de los elementos cntenidos en egresos[]
  */

  //atributos
  ingresos : Ingreso[] = [];
  egresos : Egreso[] = [];

  //constructor
  constructor(
    //declaramos la instancia de nuestros servicios
    public ingresoService : IngresoService,
    public egresoService : EgresoService
    ) {
      //inicializamos nuestros arreglos locales con los valores de los arreglos
      //de las clases services por referencia.
      this.ingresos = this.ingresoService.ingresos;
      this.egresos = this.egresoService.egresos;
    }

  //métodos
  getIngresoTotal() : number {
    let ingresoTotal : number = 0;
    //sumando a ingresoTotal los ingresos
    this.ingresos.forEach(i => ingresoTotal += i.valor);
    return ingresoTotal;
  }

  getEgresoTotal() : number {
    let egresoTotal : number = 0;
    //sumando a egresoTotal los egresos
    this.egresos.forEach(e  => egresoTotal += e.valor);
    return egresoTotal;
  }

  getPorcentajeTotal() : number {
    return this.getEgresoTotal()/this.getIngresoTotal();
  }

  getPresupuestoTotal() : number {
    return this.getIngresoTotal()-this.getEgresoTotal();
  }

}
