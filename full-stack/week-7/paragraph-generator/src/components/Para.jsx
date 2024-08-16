import {useState} from 'react'
import ParaGenerator from './paragenerator'
import './Para.css'



export default function Para(){
    const [wordCount, setWordCount] = useState(0);
    const [generatedPara, setGeneratedPara] =useState('');

    const handleInputChange = (e) => {
        setWordCount(parseInt(e.target.value,10))
        console.log(wordCount)
    }
    const handleButtonclick = () => {
        setGeneratedPara(ParaGenerator(wordCount))
    }
    return (
        <>
        <div className="page">
            <div className='container'>
                <input  type='text' className='input-box' placeholder='Enter number of words' onChange={handleInputChange}></input>
                <button className='generate-button' onClick={handleButtonclick}
                >Generate</button>
            </div>
            <div className='display-box'>{generatedPara}</div>

        </div>
        </>
    )
}