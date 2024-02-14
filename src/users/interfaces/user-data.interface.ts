import { Role } from 'src/roles/entities/role.entity';

export interface UserDataInterface {
  nombre: string;
  codigo: string;
  email: string;
  desactivo: number;
  supervpor: string;
  telefono: string;
  ult_sinc: Date;
  version: string;
  sesion: boolean;
  almacen: string;
  role: Role;
}
