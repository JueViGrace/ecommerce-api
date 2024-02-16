import { CartEntity } from 'src/cart/entities/cart.entity';
import { ProductEntity } from 'src/products/entities/product.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity({ name: 'web_cart_with_products' })
export class CartWithProductsEntity {
  @Column({ length: 30, primary: true, default: '' })
  productId: string;

  @Column({ length: 30, primary: true, default: '' })
  cartId: string;

  @Column({ default: 0 })
  quantity: number;

  @ManyToOne(() => CartEntity, (cart) => cart.cartWithProducts)
  @JoinColumn({ name: 'cartId', referencedColumnName: 'id' })
  cart: CartEntity;

  @ManyToOne(() => ProductEntity, (product) => product.cartWithProducts, {
    eager: true,
  })
  @JoinColumn({ name: 'productId', referencedColumnName: 'codigo' })
  product: ProductEntity;
}
