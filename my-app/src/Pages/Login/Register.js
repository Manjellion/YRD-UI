import React from 'react'
import RegisterComp from '../../Components/Login/Register'
import CSS from './index.module.css'

function index() {
  return (
    <div className={CSS.register_container}>
        <RegisterComp />
    </div>
  )
}

export default index