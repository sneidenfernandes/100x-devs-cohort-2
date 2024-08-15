import {useState} from 'react'
import './styles.css'



export default function Background(){

    const [background,setBackground] = useState("midnight-blue");

    function changeBackground(color){
        setBackground(color)
    }

    return (
        <div>
            <div className={`full-page ${background}`}>
                <div className='switcher'>
                    <button className='color-button' onClick={ 
                        ()=> {changeBackground('midnight-blue')}
                    }>Midnight Blue</button>
                    <button className='color-button' onClick={ 
                        ()=> {changeBackground('teal')}
                    }>Teal</button>
                    <button className='color-button' onClick={ 
                        ()=> {changeBackground('coral')}
                    }>Coral</button>
                    <button className='color-button' onClick={ 
                        ()=> {changeBackground('lavendar')}
                    }>Lavendar</button>
                    <button className='color-button' onClick={ 
                        ()=> {changeBackground('slate-gray')}
                    }>Slate Gray</button>
                </div>
            </div>
        </div>
    );
}