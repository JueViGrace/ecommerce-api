import { Lineas } from './lineas-pedido.interface';

export interface Cabecera {
  kti_ndoc: string;
  kti_codcli: string;
  kti_nombrecli: string;
  kti_codven: string;
  kti_docsol: string;
  kti_condicion: string;
  kti_tipprec: number;
  kti_totneto: number;
  kti_negesp?: string;
  dolarflete: number;
  Lineas: Lineas[];
}
