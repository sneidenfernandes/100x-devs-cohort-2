

import {RecoilRoot, useRecoilValue} from 'recoil';
import { networkAtom, messagingAtom } from './atoms';

function App() {

    return (
      <RecoilRoot>
        <MainApp/>
      </RecoilRoot>

         )
}



function MainApp(){

  const networkAtomValue = useRecoilValue(networkAtom);
  const messagingAtomValue = useRecoilValue(messagingAtom);

  return (
      <div>
        <button>Network({networkAtomValue})</button>
        <button>Messaging({messagingAtomValue})</button>
        <button>Total</button>
      </div>
      
  )

}

export default App
