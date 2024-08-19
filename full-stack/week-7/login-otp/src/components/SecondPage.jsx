import {useNavigate} from 'react-router-dom';
import {useRef} from 'react';
import './SecondPage.css';

const SecondPage = () => {
    const inputOne = useRef(null);
    const inputTwo = useRef(null);
    const inputThree = useRef(null);
    const inputFour = useRef(null);
    


    const navigate = useNavigate();
    
    function goTofirstPage(){
        
        navigate('/');
    }

    function goToThirdPage(){
        navigate('/thirdPage')
    }

    const nextInput = (e) => {
        if(e.target.id === '1'){
            inputTwo.current.focus();
        }

        if(e.target.id === '2'){
            inputThree.current.focus();
        }

        if(e.target.id === '3'){
            inputFour.current.focus();
        }
    }
    
    return (
        <div className='page'>
            <div className='container'>
                <div className='otp-input-container'>
                    <input autoComplete='off' id='1' ref={inputOne} onChange={(e) => nextInput(e)} className='otp-input'></input>
                    <input  autoComplete='off'id='2' ref={inputTwo} onChange={(e) => nextInput(e)}  className='otp-input'></input>
                    <input  autoComplete='off' id='3' ref={inputThree} onChange={(e) => nextInput(e)} className='otp-input'></input>
                    <input   autoComplete='off' id='4' ref ={inputFour} onChange={(e) => nextInput(e)} className='otp-input'></input>
                </div>
                
                    <button onClick={goToThirdPage} className='send-otp-button'>Login</button>
                    <button onClick={goTofirstPage} className='send-otp-button'>Go Back</button>
            </div>
        </div>
    )
}


export default SecondPage;