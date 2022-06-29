import React from 'react'
import RegisterComp from '../../Components/Login/Register'
import CSS from './index.module.css'

function index() {
  return (
    <div className={CSS.container}>
        <RegisterComp />
    </div>
  )
}

export default index