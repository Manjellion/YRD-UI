import React from 'react'
import LoginComp from '../../Components/Login/Login'
import CSS from './index.module.css'
import LoginImg from '../../Images/Login/login-img.png'

function index() {
  return (
    <div className={CSS.container}>
        <div className={CSS.login_component}>
          <LoginComp />
        </div>
        <div className={CSS.login_img}>
            <img src={LoginImg} />
        </div>
    </div>
  )
}

export default index