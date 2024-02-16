export interface CreateUserInterface {
  nombre: string;

  codigo: string;

  email: string;

  password: string;

  desactivo?: number;

  supervpor?: string;

  telefono: string;

  ult_sinc?: string;

  version?: string;

  sesion?: boolean;

  almacen?: string;
}
