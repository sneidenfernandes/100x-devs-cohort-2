import { useState } from "react";

export function CreateTodo(){

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return <div>
        <input id="title" style={{
            padding:10,
            margin:10
            }} type="text" placeholder="Title" onChange={function(e){
                setTitle(e.target.value)
            }}></input><br></br>
        <input id="description"
        style={{
            padding:10,
            margin:10
            }}  type="text" onChange={function(e){
                setDescription(e.target.value)
            }}  placeholder="Description"></input><br></br>
        <button 
        onClick={()=>{~~
            fetch("http://localhost:3000/todo",
                {
                    method: "POST",
                    body: JSON.stringify({
                        title: title,
                        description: description,
    
                    }),
                    headers:{
                        "Content-Type": "application/json"
                    }
                }
            )
            .then(async function(res){
                const json = await res.json();
                console.log("Todo created")
            })
        }}>Add a todo</button>
    </div>
}