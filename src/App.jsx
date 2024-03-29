import { useState } from 'react'
import Authenticate from './components/Authenticate'
import SignUpForm from './components/SignUpForm'
import './App.css'

function App() {
 

 const [token, setToken] = useState(null);

  return (
    <>
    <Authenticate token={token}/>
    <SignUpForm setToken={setToken} />
    


    </>
  )
}

export default App
