import data from './data';
import {useState} from 'react';
import './styles.css'


export default function  Accordian(){
    
    const [selected,setSelected] = useState(null);

  function handleSingleSelection(getCurrentId){
    setSelected(getCurrentId===selected?null:getCurrentId)
    console.log('something')

  }
    return (
       <div className='wrapper'>
        <div className='accordian'>
            {data && data.length > 0 ?
            <div>{data.map(function(dataItem){
                return (
                    <div key={dataItem.id} className="item">
                    <div onClick={()=>{handleSingleSelection(dataItem.id)}} className="title">
                    <h1>{dataItem.title}</h1>
                    <div>{
                         selected === dataItem.id ? 
                         <div className='description'>{dataItem.description}</div>
                         :<div></div>
                        }
                    </div>
                    <span></span>
                    </div>
                    </div>
                );
            })}</div>
            :<div>Data not found.</div>}
        </div> 
       </div>
    )

}