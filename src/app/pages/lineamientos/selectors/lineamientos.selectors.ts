import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromLineamientos from '../reducers/lineamientos.reducer';

export const selectLineamientosState = createFeatureSelector<fromLineamientos.State>(
  fromLineamientos.lineamientosFeatureKey
);
export const getLineamientoSeleccionado = createSelector(
  selectLineamientosState,
  (state: fromLineamientos.State) => state.LineamientoSeleccionado
);

export const getLineamientos = createSelector(
  selectLineamientosState,
  (state: fromLineamientos.State) => state.Lineamientos
);
export const getFuenteRecursoSeleccionada = createSelector(
  selectLineamientosState,
  (state: fromLineamientos.State) => state.FuenteRecursoSeleccionada
);
