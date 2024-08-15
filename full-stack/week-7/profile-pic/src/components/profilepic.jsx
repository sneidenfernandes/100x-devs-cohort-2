import React from 'react';
import cover from '../assets/cover.jpg'
import profilePicture from '../assets/profile.png'
import './profilepic.css'

export default function ProfilePic({name,age,city,followerCount,likeCount, photoCount}){
    return (
        <>
        <div className='card'>
            <div className='img-data'>

                <img className='cover-pic' src={cover} alt='cover'></img>
                <img className='profile-pic'src={profilePicture}></img>
            </div>
            <div className='personal-data'>
                <p className='name'>{name} <span className='age'>{age}</span></p> 
                <p className='city'>{city}</p>

            </div>
            <div className='metadata'>
                <div>
                    <p className='count'>{followerCount}k</p>
                    <p className='count-type'>Followers</p>
                </div>
                <div>
                    <p className='count'>{likeCount}k</p>
                    <p className='count-type'>Likes</p>
                </div>
                <div>
                    <p className='count'>{photoCount}k</p>
                    <p className='count-type'>Photos</p>
                </div>
            </div>
        </div>
        </>
        
         
    )
}