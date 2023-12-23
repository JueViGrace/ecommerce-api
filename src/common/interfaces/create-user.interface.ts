export interface CreateUserInterface {
  nombre: string;

  codigo: string;

  email: string;

  password: string;

  desactivo?: number;

  supervpor?: string;

  ult_sinc?: string;

  fechamodifi?: Date;

  createdAt?: Date;

  version?: string;

  sesion?: number;

  almacen?: string;
}
