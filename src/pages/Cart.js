import React from 'react'
import Layout from '../layouts/Layout'
import { useSelector, useDispatch } from 'react-redux'
import { remove } from '../store/cartSlice';


const Cart = () => {
  const cart = useSelector((state) => state.cartSlice);
  const dispatch = useDispatch();

  const removeItemHandler = (productId) => {
    dispatch(remove(productId));

  }
  return (
    <Layout>
      <div>
        <h3>Cart</h3>
        <div className="cartWrapper">
          {/* {cart.map((product) => (
            <div key={product.id} className="cartCard">
              <img src={product.image} alt="" />
              <h5>{product.title}</h5>
              <h5>{product.price}</h5>
              <button
                className="btn"

              >
                Remove
              </button>
            </div>
          ))} */}
          {
            cart.map((singleProduct, index) => (
              <div key={index} className='col-3'>
                <div class="card" style={{ width: '18rem' }}>
                  <div className='text-center' style={{ height: '150px' }}>
                    <img src={singleProduct.image} className="h-100 " alt="..." />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{singleProduct.title}</h5>
                    <p className="card-text">${singleProduct.price}</p>
                    <button onClick={() => removeItemHandler(singleProduct.id)} className='btn btn-danger'>Remove</button>
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </Layout>
  )
}

export default Cart