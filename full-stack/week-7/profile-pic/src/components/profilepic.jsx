import React from 'react';
import cover from '../assets/cover.png'
import './profilepic.css'

export default function ProfilePic(){
    return (
        <div className='card'>
            <img className='cover-pic' src={cover} alt='cover'></img>
        </div>
         
    )
}