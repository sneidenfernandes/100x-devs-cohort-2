
import {useNavigate} from 'react-router-dom'
import { useRef } from 'react';

import './FirstPage.css';
import {z} from 'zod';

const FirstPage = () => {

    const phoneNumberRef = useRef(null);
    const navigate = useNavigate();
       

    
    function goToSecondPage(){
       const validationSchema = z.string().length(10);
       const validated = validationSchema.safeParse(phoneNumberRef.current.value);
       if(validated.success){
        navigate('/secondPage');
       }else{
        alert('Enter 10 characters only.')
       }
       

    }


  
    return (
        <div>
        <div className='page'>
            <div className='container'>
                <p>Login via OTP</p><br></br>
                <input type='text' ref={phoneNumberRef} placeholder='Enter Mobile Number' className='mobile-number-input' ></input>
                <button className='send-otp-button' onClick={(e)=>goToSecondPage(e)}>Send OTP</button>
            </div>
            
        </div>
        </div>
    )
}


export default FirstPage;

