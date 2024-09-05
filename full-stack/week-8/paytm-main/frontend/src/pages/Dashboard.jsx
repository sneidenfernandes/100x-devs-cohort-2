
import Users from "../components/Users"
import AppBar from "./AppBar"
import Balance from "./Balance"

export default function  Dashboard(){
    return (
        <div>
            <AppBar/>
            <Balance/>
            <Users/>
        </div>
    )
}