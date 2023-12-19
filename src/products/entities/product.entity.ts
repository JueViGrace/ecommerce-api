import { Column, Entity } from 'typeorm';

@Entity({ name: 'articulo' })
export class Product {
  @Column({ length: 30, primary: true })
  codigo: string;

  @Column({ type: 'double', precision: 24, scale: 0 })
  comprometido: number;

  @Column({ type: 'double', precision: 4, scale: 2 })
  dctotope: number;

  @Column({ type: 'double', precision: 4, scale: 0 })
  discont: number;

  @Column({ type: 'char', length: 1 })
  enpreventa: string;

  @Column({ type: 'double', precision: 20, scale: 0 })
  existencia: number;

  @Column({ type: 'datetime', default: '0001-01-01 01:01:01' })
  fechamodifi: string;

  @Column({ length: 6 })
  grupo: string;

  @Column({ length: 20 })
  marca: string;

  @Column({ length: 150 })
  nombre: string;

  @Column({ type: 'double', precision: 20, scale: 7 })
  precio1: number;

  @Column({ type: 'double', precision: 20, scale: 7 })
  precio2: number;

  @Column({ type: 'double', precision: 20, scale: 7 })
  precio3: number;

  @Column({ type: 'double', precision: 20, scale: 7 })
  precio4: number;

  @Column({ type: 'double', precision: 20, scale: 7 })
  precio5: number;

  @Column({ type: 'double', precision: 20, scale: 7 })
  precio6: number;

  @Column({ type: 'double', precision: 20, scale: 7 })
  precio7: number;

  @Column({ length: 20 })
  referencia: string;

  @Column({ length: 6 })
  subgrupo: string;

  @Column({ length: 15 })
  unidad: string;

  @Column({ type: 'double', precision: 20, scale: 0 })
  vta_max: number;

  @Column({ type: 'double', precision: 20, scale: 0 })
  vta_min: number;

  @Column({ type: 'double', precision: 15, scale: 0 })
  vta_minenx: number;

  @Column()
  vta_solofac: number;

  @Column()
  vta_solone: number;
}
