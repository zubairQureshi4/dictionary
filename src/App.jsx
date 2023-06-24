import { useEffect, useState } from 'react'
import './App.css'
import SignUpAndLogin from './Components/SignUpAndLogin'
import Meaning from './Components/Meaning'
import { db } from './Connections/PlanetScaleDb'

function App() {
  const [signIn, setSignIn] =useState(false)
  
  useEffect(()=>{
    if(localStorage.getItem("data")){
      const firstLoad = async () =>{
        const data = localStorage.getItem("data")
        const jsonData = await JSON.parse(data);
        const responseData = [
          jsonData.email,
          jsonData.password
      ];
        const query =
        "Select * from users where email = ? and password = ?";
        try {
           const result = await db.execute(query, responseData);
           if(result.rows.length != 0){
            const data = JSON.stringify(result.rows[0])
            localStorage.setItem("data", data);
            setSignIn(false)
          }else{
            setSignIn(true)
          }
       } catch (error) {
        console.log(error);
        setSignIn(true)
       }
      }
      firstLoad()
    }else{
      setSignIn(true)
    }
  },[signIn])
  return (
    <> 
    {signIn ? 
      <SignUpAndLogin setSignIn={setSignIn}/>     
    : 
    <Meaning setSignIn={setSignIn}/>}
    </>
  )
}

export default App
