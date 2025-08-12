import { games } from "./store.js";
import { testGame } from "./store.js";

export function startLogger(){
    setInterval(()=>{
        testGame.log();
    }, 5000);   
}