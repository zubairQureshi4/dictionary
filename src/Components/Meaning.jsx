import { useState } from "react";
import MainNavbar from "./MainNavbar"
import WordDetails from "./WordDetails"
import {  FormControl, Button } from 'react-bootstrap';
import axios from "axios";
import Profile from "./Profile";
import Spinner from 'react-bootstrap/Spinner';

const Meaning = ({setSignIn}) => {
  const [search , setSearch] = useState('')
  const [navWord , setnavWord] = useState('')
  const [gotWord , setGotWord] = useState('')
  const [gotError , setGotError] = useState('')
  const [profile, setProfile] = useState(false);
  const [loading, setLoading] = useState(false);
  const getWord = async () =>{
    setLoading(true);
    if(search != ''){
      await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`).then(res => setGotWord(res.data)).catch(err => setGotError(err.response.data))
      setnavWord(search)
    }
    setLoading(false)
  }
  return (
    <>
      <MainNavbar setSignIn={setSignIn} gotWord={navWord} setProfile={setProfile} profile={profile}/>
      {loading ? 
        <Spinner animation="grow" variant="info" className="mt-5" style={{width: 80, height: 80, display: 'flex', margin: 'auto'}}/>
      : 
      <>
      {profile ? <Profile/> : 
      <div>
      <div className="searchDiv mt-3">
      <div >
        <FormControl type="text"   placeholder="Enter Word" onChange={(e)=>setSearch(e.target.value)} />
        <Button variant="primary" onClick={getWord}>Search</Button>
      </div>
      </div>
      <WordDetails props={gotWord} Error={gotError}/>
      </div>
      }
      </>
      }
    </>
  )
}

export default Meaning