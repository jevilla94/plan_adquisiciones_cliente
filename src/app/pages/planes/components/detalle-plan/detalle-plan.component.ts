import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoadAccionTabla, LoadFilaSeleccionada } from '../../../../shared/actions/shared.actions';
import { getAccionTabla, getArbolRubro, getFilaSeleccionada } from '../../../../shared/selectors/shared.selectors';
import { ParametricService } from '../../../../shared/services/parametric.service';
import { SharedService } from '../../../../shared/services/shared.service';
import { CargarActividades } from '../../../actividades/actions/actividades.actions';
import {
  CargarElementosARKA,
  CargarMeta,
  CargarModalidades,
  CargarProducto,
  CargarRenglonPlan,
  CargarRubro,
  ConsultarRenglonPlan,
  SeleccionarFechaSeleccion,
  SeleccionarFuente,
  SeleccionarResponsable
} from '../../../registro-plan-adquisiciones/actions/registro-plan-adquisiciones.actions';
import { CONFIGURACION_PRUEBA_2 } from '../../interfaces/interfaces';
import { getPlanDetallado } from '../../selectors/planes.selectors';

@Component({
  selector: 'ngx-detalle-plan',
  templateUrl: './detalle-plan.component.html',
  styleUrls: ['./detalle-plan.component.scss']
})
export class DetallePlanComponent implements OnInit, OnDestroy {

  configuracion: any[];
  configTotal: any;
  datos: any[];

  subscription$: any;
  subscription2$: any;
  subscription3$: any;


  constructor(
    private store: Store<any>,
    private route: Router,
    private sharedService: SharedService,
    private parametrics: ParametricService,
  ) {
    // this.parametrics.CargarArbolRubros('3');
  }

  ngOnInit() {

    // lectura de Datos con fuentes de Recurso para renderizacion
    this.subscription$ = combineLatest([
      this.store.select(getArbolRubro).pipe(
        map(data => {
          if (Object.keys(data).length !== 0) {
            return data[0].children;
          } else {
            return null;
          }
        }),
      ),
      this.store.select(getPlanDetallado),
    ]).subscribe(([fuentesRecurso, plan]) => {

      if (this.sharedService.IfStore(plan) && fuentesRecurso) {
        this.AjustarDatos(plan[0], fuentesRecurso);
      } else {
        this.datos = [];
      }
    });
    // Seleccionar Nuevo Plan
    this.subscription2$ = this.store.select(getAccionTabla).subscribe((accion) => {
      if (this.sharedService.IfStore(accion)) {
        this.CrearRenglon();
      }
    });
    // Seleccionar Fila Tabla
    this.subscription3$ = this.store.select(getFilaSeleccionada).subscribe((accion) => {
      if (this.sharedService.IfStore(accion)) {
        if (accion.accion.name === 'Editar') {
          this.ActualizarRenglon(accion.fila);
        }
      }
    });
  }


  AjustarDatos(datos: any, fuentesRecurso: any) {

    this.configuracion = [];
    this.datos = [];
    const llaves = [];

    Object.keys(datos).forEach((key: any, index: any) => {

      llaves.push(key.split(' ')[1]);

      const ajusteConfiguracion = JSON.parse(JSON.stringify(CONFIGURACION_PRUEBA_2));
      ajusteConfiguracion.title.name = fuentesRecurso.find(
        (fuente: any) => fuente.Codigo === llaves[index]
      ).data.Nombre;
      this.configuracion.push(ajusteConfiguracion);

      datos[key].forEach((element: any) => {
        const fechas: any = {
          start: new Date(element.FechaEstimadaInicio),
          end: new Date(element.FechaEstimadaFin),
        };
        element.FechaEstimada = fechas;
      });
      this.datos.push(datos[key]);
    });
  }

  CrearRenglon() {
    this.route.navigate(['pages/plan-adquisiciones/registro-plan-adquisiciones']).then(() => {
      this.store.dispatch(LoadAccionTabla(null));
      this.store.dispatch(CargarRubro(null));
      this.store.dispatch(CargarMeta(null));
      this.store.dispatch(CargarProducto(null));
      this.store.dispatch(CargarModalidades(null));
      this.store.dispatch(CargarElementosARKA(null));
      this.store.dispatch(CargarActividades(null));
      this.store.dispatch(SeleccionarResponsable(null));
      this.store.dispatch(CargarRenglonPlan(null));
      this.store.dispatch(SeleccionarFechaSeleccion(null));
      this.store.dispatch(SeleccionarFuente(null));
    });
  }
  ActualizarRenglon(renglon: any) {
    this.route.navigate(['pages/plan-adquisiciones/registro-plan-adquisiciones']).then(() => {
      this.store.dispatch(ConsultarRenglonPlan(renglon));
      this.store.dispatch(LoadFilaSeleccionada(null));
    });
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
    this.subscription2$.unsubscribe();
    this.subscription3$.unsubscribe();
  }

  OnCancel() {
    this.route.navigate(['pages/plan-adquisiciones/planes/tabla-general']);
  }

}
