import data from './data';
import {useState} from 'react';
import './styles.css'


export default function  Accordian(){
    
    const [selected,setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiselection] = useState(false);
    const [multiple, setMutltiple] = useState([]);

  function handleSingleSelection(getCurrentId){
    setSelected(getCurrentId===selected?null:getCurrentId)
    console.log('something')

  }


  function handleMutltiSelection(getCurrentId){
    let cpyMutliple = [...multiple];
    const findIndexOfCurrentId = cpyMutliple.indexOf(getCurrentId);
    
    if (findIndexOfCurrentId === -1) {
        cpyMutliple.push(getCurrentId);
    }else{
        cpyMutliple.splice(findIndexOfCurrentId,1);
    }

    setMutltiple(cpyMutliple)
    
    console.log(selected, cpyMutliple);

  }
    return (
       <div className='wrapper'>
        <button className='mutltiselect-button' onClick={()=>{setEnableMultiselection(!enableMultiSelection)}}>Enable Multiselection</button>
        <div className='accordian'>
            {data && data.length > 0 ?
            <div>{data.map(function(dataItem){
                return (
                    <div key={dataItem.id} className="item">
                    <div onClick={enableMultiSelection? () => handleMutltiSelection(dataItem.id):()=>{handleSingleSelection(dataItem.id)}} className="title">
                    <h1>{dataItem.title}</h1>
                    <div>{
                         enableMultiSelection?  multiple.indexOf(dataItem.id) === -1 && (
                            <div>{dataItem.description}</div>
                         ) : selected === dataItem.id && (
                            <div>{dataItem.description}</div>
                         )
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