import {Admin} from "@repo/ui/admin"
import { InputBox } from "@repo/ui/input-box"
import {name} from "@repo/common"

export default function(){

    return <div>
     
        {name}
        <Admin/>
        <InputBox/>
        
    </div>
}