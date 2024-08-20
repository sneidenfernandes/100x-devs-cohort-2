import BirthdayCard1 from "./BirdthdayCard1"
import BirthdayCard2 from "./BirthdayCard2"

export default function BirthdayCards({name}){
    return (
        <>
        <BirthdayCard1 name={name}/>
        <br></br>
        <BirthdayCard2 name={name}/>
        </>
    )
}