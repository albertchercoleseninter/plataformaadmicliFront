export  interface PartBillingDto {
   installation: string;
   month: number;
   company: number;
   type: string;
   year: number;
   client?: number;
}

export interface PartDto{
  codigo: string;
  empresa: number;
  tipo: string;
  guardar: boolean;
  fondo: boolean;
}
export interface BillingDto{
  requestFacturas: number[];
  empresa: number;
  tipo: string;
  guardar: boolean;
  fondo: boolean;
  ejercicio: number;
  ensobrado: boolean;
  doblePagina: boolean;
  adjuntarParte: boolean;
}

