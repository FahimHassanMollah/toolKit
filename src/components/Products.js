import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { add, remove } from '../store/cartSlice';

const Products = () => {
    const dispatch = useDispatch()
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function getProducts() {
            const response = await fetch('https://fakestoreapi.com/products');
            const products = await response.json();
            setProducts(products)
        }
        getProducts();

        return () => {
            console.log(products);
        }
    }, [])

    const addToCartHandler = (product) => {
        dispatch(add(product));
    }

return (
    <div className="container">
        <div className='row'>
            {
                products.map((singleProduct, index) => (
                    <div key={index} className='col-3'>
                        <div class="card" style={{ width: '18rem' }}>
                            <div className='text-center' style={{ height: '150px' }}>
                                <img src={singleProduct.image} className="h-100 " alt="..." />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{singleProduct.title}</h5>
                                <p className="card-text">${singleProduct.price}</p>
                                <button onClick={() => addToCartHandler(singleProduct)} className='btn btn-danger'>Add to cart</button>
                                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
)
}

export default Products