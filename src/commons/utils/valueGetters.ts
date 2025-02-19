import { ValueGetterParams } from "ag-grid-community";

/**
 * Converts the "h_mag" column value to a number.
 *
 * @param params - The parameters provided by ag-Grid.
 * @returns A number representing the "h_mag" value, or null if the value is not present.
 */
export function getHMagValue(params: ValueGetterParams): number | null {
  return params.data.h_mag != null ? Number(params.data.h_mag) : null;
}

/**
 * Converts the "moid_au" column value to a number.
 *
 * @param params - The parameters provided by ag-Grid.
 * @returns A number representing the "moid_au" value, or null if the value is not present.
 */
export function getMoidAuValue(params: ValueGetterParams): number | null {
  return params.data.moid_au != null ? Number(params.data.moid_au) : null;
}

/**
 * Converts the "q_au_1" column value to a number.
 *
 * @param params - The parameters provided by ag-Grid.
 * @returns A number representing the "q_au_1" value, or null if the value is not present.
 */
export function getQAu1Value(params: ValueGetterParams): number | null {
  return params.data.q_au_1 != null ? Number(params.data.q_au_1) : null;
}

/**
 * Converts the "q_au_2" column value to a number.
 *
 * @param params - The parameters provided by ag-Grid.
 * @returns A number representing the "q_au_2" value, or null if the value is not present.
 */
export function getQAu2Value(params: ValueGetterParams): number | null {
  return params.data.q_au_2 != null ? Number(params.data.q_au_2) : null;
}

/**
 * Converts the "period_yr" column value to a number.
 *
 * @param params - The parameters provided by ag-Grid.
 * @returns A number representing the "period_yr" value, or null if the value is not present.
 */
export function getPeriodYrValue(params: ValueGetterParams): number | null {
  return params.data.period_yr != null ? Number(params.data.period_yr) : null;
}

/**
 * Converts the "i_deg" column value to a number.
 *
 * @param params - The parameters provided by ag-Grid.
 * @returns A number representing the "i_deg" value, or null if the value is not present.
 */
export function getIDegValue(params: ValueGetterParams): number | null {
  return params.data.i_deg != null ? Number(params.data.i_deg) : null;
}

/**
 * Converts the "discovery_date" column value to a JavaScript Date object.
 *
 * @param params - The parameters provided by ag-Grid.
 * @returns A Date object representing the "discovery_date" value.
 */
export function getDateValue(params: ValueGetterParams): Date {
  return new Date(params.data.discovery_date);
}
