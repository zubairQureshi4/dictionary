import { useState } from "react";
import MainNavbar from "./MainNavbar"
import WordDetails from "./WordDetails"
import { Form, FormControl, Button } from 'react-bootstrap';
import axios from "axios";

const Meaning = ({setSignIn}) => {
  const [search , setSearch] = useState('')
  const [gotWord , setGotWord] = useState('')
  const [gotError , setGotError] = useState('')
  const getWord = async () =>{
    axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`).then(res => setGotWord(res.data)).catch(err => setGotError(err.response.data))
  }
  return (
    <>
      <MainNavbar setSignIn={setSignIn} gotWord={gotWord}/>
      <div className="searchDiv mt-3">
      <div >
        <FormControl type="text"  placeholder="Enter Word" onChange={(e)=>setSearch(e.target.value)}/>
        <Button variant="primary" onClick={getWord}>Search</Button>
      </div>
      </div>
      <WordDetails props={gotWord} Error={gotError}/>
    </>
  )
}

export default Meaning