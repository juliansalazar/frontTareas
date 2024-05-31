import React from 'react'
import '../styles/Card.css'

const Card = () => {
  return (
    <>
      <div className="card">
      <img src="https://shop.advanceautoparts.com/wcsstore/CVWEB/staticproductimage/2916/large/12181196_svr_24f3_pri_larg.jpg" className="card-img-top"/>
      <div className="card-body">
        <h5 className="card-title">DieHard Silver Battery</h5>
        <p className="card-text">24F Group Size, 650 CCA, 812 CA, 130 Minute Reserve Capacity, For Lower Power Demands</p>
        <p className='pricing' ><span className='price'> <span className='price-decimals'>$</span>199<span className='price-decimals'>99</span> </span> + Shipping</p><p></p>
        <p className='List-Price'>List: <span className='ex-price'>$250.00</span></p>
        <button type="button" className="btn btn-outline-primary">Agregar al carrito</button>
      </div>
      </div>
    </>
  )
}

export default Card
