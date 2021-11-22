import React,{useContext} from 'react';
import Product from './Product';
import { ProductContext } from '../../App';




const AllProductsPage = (props) => {
	let products=useContext(ProductContext)
	
	return (
		<div className="row product-cards">
			{ 
			 products &&  products.map((product, i) => {
				return <Product key={i} product={product} index={i} {...props}></Product>
			  })}
			}
		</div>
	)
}

export default AllProductsPage;