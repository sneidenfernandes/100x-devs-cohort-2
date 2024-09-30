

interface ButtonProps{
    text: string
}

export default function Header({text}: ButtonProps){
    return (
        <header>{text}</header>
    )
}