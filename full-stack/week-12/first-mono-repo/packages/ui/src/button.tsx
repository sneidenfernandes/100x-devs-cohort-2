
interface ButtonProps {
    name: string
}

export default function Button({name}:ButtonProps){

    return (
        <button>{name}</button> 
    )
}