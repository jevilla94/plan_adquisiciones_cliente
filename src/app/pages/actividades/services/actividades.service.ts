import { Injectable } from '@angular/core';
import { PopUpManager } from '../../../@core/managers/popUpManager';
import { RequestManager } from '../../../@core/managers/requestManager';

@Injectable({
  providedIn: 'root'
})
export class ActividadesService {

  constructor(private rqManager: RequestManager,
    private pUpManager: PopUpManager) { }

  /**
   * Get Actividades
   *  retorna las Actividades asociados a la Meta seleccionada
   * @param [Meta] Meta Asociada
   * @returns  Actividades Asociadas.
   */
  public getActividadesAsociadas(
    MetaId: any,
    ) {
    this.rqManager.setPath('PLAN_ADQUISICIONES_CRUD_SERVICE');
    return this.rqManager.get(
      `Actividad/` +
      `?query=Activo:true,` +
      `MetaId:${MetaId},`
    );
  }
  /**
    * Post Actividad
    *  se crea una Actividad nueva
    * @param [Actividad] Actividad por crear
    * @returns  Actividad creada.
    */
  public crearActividad(
    Actividad: any
    ) {
    this.rqManager.setPath('PLAN_ADQUISICIONES_CRUD_SERVICE');
    return this.rqManager.post(
      `Actividad/`,
      Actividad
    );
  }
  /**
    * Put Actividad
    *  se modifica un Actividad
    * @param [Actividad] Actividad por modificar
    * @returns  Actividad Modificada.
    */
   public updateActividad(
    Actividad: any
    ) {
    this.rqManager.setPath('PLAN_ADQUISICIONES_CRUD_SERVICE');
    return this.rqManager.put(
      `Actividad/`,
      Actividad,
      Actividad.Id
    );
  }
}
