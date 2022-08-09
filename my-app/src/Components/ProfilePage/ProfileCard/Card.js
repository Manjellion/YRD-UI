import React from 'react'
import ColoredLine from '../../Homepage/Components/ColoredLine'
import CSS from '../index.module.css'
import { BsInstagram, BsTwitter, BsFacebook, BsGlobe } from 'react-icons/bs'
import { FiShare } from 'react-icons/fi'

function Card(props) {
  return (
    <div className={CSS.profile_cardContainer}>
        <div className={CSS.profile_cardImg}>
            <img src={props.img} alt='profile image' />
        </div>
        <div className={CSS.profile_cardHeader}>
            <h1>{props.name} <FiShare className={CSS.profile_cardShare}/></h1>
            <p>@{props.username}</p>
        </div>
        <div className={CSS.profile_cardDesc}>
            <p>{props.description}</p>
        </div>
        <div className={CSS.profile_cardLink}>
            <p><BsGlobe color='blue'/> {props.link}</p>
        </div>
        <ul>
            <li><a href={props.instagram}><BsInstagram color='#C13584' /></a></li>
            <li><a href={props.twitter}><BsTwitter color='#00acee'/></a></li>                
            <li><a href={props.facebook}><BsFacebook color='blue'/></a></li>
        </ul>
        <ColoredLine color="lightgrey" />
        <div className={CSS.profile_cardJoined}>
            <p>Member since {props.joinDate}</p>
        </div>
    </div>
  )
}

export default Card