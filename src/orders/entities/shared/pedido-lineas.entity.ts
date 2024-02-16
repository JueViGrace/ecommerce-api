import { Column, Entity } from 'typeorm';

@Entity({ name: 'ke_opmv' })
export class LineasPedidoEntity {
  @Column({ length: 8, default: '' })
  kti_tdoc: string;

  @Column({ length: 17, default: '', primary: true })
  kti_ndoc: string;

  @Column({ type: 'decimal', precision: 2, scale: 0, default: 0 })
  kti_tipprec: number;

  @Column({ length: 25, default: '', primary: true })
  kmv_codart: string;

  @Column({ length: 150, default: '' })
  kmv_nombre: string;

  @Column({ type: 'decimal', precision: 24, scale: 7, default: 0.0 })
  kmv_cant: number;

  @Column({ type: 'decimal', precision: 24, scale: 7, default: 0.0 })
  kmv_artprec: number;

  @Column({ type: 'decimal', precision: 24, scale: 7, default: 0.0 })
  kmv_stot: number;

  @Column({ type: 'decimal', precision: 4, scale: 2, default: 0.0 })
  kmv_dctolin: number;
}
