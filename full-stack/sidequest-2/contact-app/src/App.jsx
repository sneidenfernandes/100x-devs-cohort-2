import React,{useState} from 'react';
import './App.css'
import Header from "./components/Header.jsx"
import AddContact from './components/AddContact.jsx';
import ContactList from './components/ContactList.jsx';
import ContactCard from './components/ContactCard.jsx';



function App() {
  const [contacts, setContacts] = useState([])
  return (
    <div className='ui container'>
      <Header />
      <AddContact />
      <div className='ui divider'></div>
      <ContactList contacts={contacts} />
    </div>
  )
}

export default App
