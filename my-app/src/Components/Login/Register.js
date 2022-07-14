import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import { BsFacebook, BsFillLockFill } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import Logo from '../../Images/Logo/M_Logo.jpg'
import CSS from './index.module.css'

function Register() {
  return (
    <div className={CSS.register_container}>
        <div className={CSS.register_header}>
            <h1><Link to="/residentPage"><img src={Logo} className={CSS.register_header_img} /></Link></h1>
        </div>
        <div className={CSS.login_container}>
            <div className={CSS.login_header}>
                <h1>Register</h1>
                <p>Register to Your Royal Docks to easily join events and manage your business</p>
            </div>
            <div className={CSS.register_btn}>
                <div className={CSS.btn}>
                    <Button><FcGoogle /> Register with Google</Button>
                </div>
                <div className={CSS.btn}>
                    <Button><BsFacebook color='#3b5998'/> Register with Facebook</Button>
                </div>
            </div>
            <div className={CSS.line}></div>
            <div className={CSS.login_Form}>
                <Form>
                    <Form.Group className='mb-3' controlId='formBasicEmail'>
                        <Form.Label><AiOutlineMail /> Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email address" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='formBasicPassword'>
                        <Form.Label><BsFillLockFill /> Password</Form.Label>
                        <Form.Control type='password' placeholder='Password' />
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='checkBox'>
                        <Form.Check type='checkbox' label='Sign up to newsletters' />
                    </Form.Group>
                    <Form.Group className={CSS.form_btn}>
                        <Button variant='primary' type='submit'>
                            Register
                        </Button>
                    </Form.Group>
                    <Form.Group>
                        <Form.Text>
                            Already got an account <Link to='/login'>Login here</Link>
                        </Form.Text>
                    </Form.Group>
                </Form>
            </div>
        </div>
        <footer>
            © All rights reserved to Your Royal Docks
        </footer>
    </div>
  )
}

export default Register