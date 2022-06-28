import React from 'react'
import LoginComp from '../../Components/Login/Login'
import CSS from './index.module.css'
import LoginImg from '../../Images/Login/login-img.png'

function index() {
  return (
    <div className={CSS.container}>
        <LoginComp />
        <div className={CSS.login_img}>
            <img src={LoginImg} alt="Login Image"/>
        </div>
    </div>
  )
}

export default index