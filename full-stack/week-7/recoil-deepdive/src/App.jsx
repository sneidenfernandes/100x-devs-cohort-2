import { useState } from 'react'
import { jobsAtom, MessagingAtom, networkAtom, notificationsAtom } from './atoms';
import { useRecoilValue, RecoilRoot,useRecoilState } from 'recoil';


function App() {

    return (
      <RecoilRoot>
        <MainApp />
      </RecoilRoot>    )
}

function MainApp(){
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsAtomCount = useRecoilValue(jobsAtom);
  const notificationsAtomCount = useRecoilValue(notificationsAtom);
  const [messsagingAtomCount,setMessagingAtomCount] = useRecoilState(MessagingAtom);
  const totalNotificationCount = networkNotificationCount + jobsAtomCount + notificationsAtomCount + messsagingAtomCount
 

  return (
    <>
      <button>Home</button>

      <button>My network ({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button>
      <button>Jobs ({jobsAtomCount})</button>
      <button>Messaging ({messsagingAtomCount})</button>
      <button>Notifications ({notificationsAtomCount})</button>

      <button onClick={()=> {
        setMessagingAtomCount(messsagingAtomCount + 1);
      }}>Me ({totalNotificationCount})</button>
    </>
  )
}

export default App
