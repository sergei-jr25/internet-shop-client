import AddToCartButton from '@/components/ui/Prouduct/product-item/AddToCartButton/AddToCartButton'
import FavoriteButton from '@/components/ui/Prouduct/product-item/FavoriteButton/FavoriteButton'
import { useCart } from '@/hooks/useCart'
import { IProduct } from '@/types/product.interface'
import Image from 'next/image'
import { FC } from 'react'
import styles from './Products.module.scss'

const ProductsItem: FC<{ product: IProduct }> = ({ product }) => {
	const { items } = useCart()

	return (
		<div className={styles.products__item}>
			<div className={styles.products__image}>
				<Image src={product.image[0]} alt={product.name} fill />
			</div>
			<div className={styles.products__content}>
				<FavoriteButton product={product} />
				<div className={styles.products__name}>{product.name}</div>
				<div className={styles.products__description}>
					{product.description}
				</div>
				<div className={styles.products__price}>{product.price}</div>
				<div className={styles.products__exsist}>
					{product.isExsist ? 'Available in stock' : 'Out of stock'}
				</div>
				<AddToCartButton product={product} />
			</div>
		</div>
	)
}
export default ProductsItem
