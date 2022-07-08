import React from 'react'
import Images from './ProductImg'
import Navbar from '../../Navbar'
import Footer from '../../Footer'
import ProductInfo from './ProductInfo'
import CSS from '../index.module.css'

function Product() {
  return (
    <div className={CSS.product_main_container}>
        <Navbar />
        <div className={CSS.product_components}>
          <div>
              <Images />
          </div>
          <div>
              <ProductInfo />
          </div>
        </div>
          <Footer />
    </div>
  )
}

export default Product