"use client"
import {signIn, signOut, useSession} from "next-auth/react"
import { useRouter } from "next/navigation";


export const Appbar = () => {

    const session = useSession();

    return <div>
        <button onClick={() => {
            signIn();
        }}>
            SignIn
        </button>

        <button onClick={()=>{
            signOut();
        }}>
            Logout
        </button>

        {JSON.stringify(session)}
    </div>

}