/* eslint-disable react/prop-types */
import  { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import {db} from '../Connections/PlanetScaleDb'

const Profile = () => {
    const [jsonData, setjsonData] = useState();
    
    useEffect(()=>{
    const getData = async ()=>{
        const data = localStorage.getItem('data')
        const Data = await JSON.parse(data)
        setjsonData(Data);
    }
    getData();
},[])

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
        const query =
        `UPDATE users SET password = ${confirmPassword} WHERE id = ${jsonData?.id} AND password = ${password};` 
 try {
     await db.execute(query);
     window.location.reload();
 } catch (error) {
    alert("Wrong Credientials");
 }
    
    }
  return (
    <div className=' bigSignUpDiv p-5'>
    <div className=" mainFormDiv">
    <div className='d-flex'>
      <h1 className='text-center text-light mx-auto'>{jsonData?.username}</h1>
    </div>
      <Form onSubmit={handleSignup}>

        <Form.Group controlId="formPassword">
          <Form.Label className='text-light'>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your Old password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formConfirmPassword">
          <Form.Label className='text-light'>New Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm your New password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant=" d-flex mx-auto mt-3 w-100 signupButton" type="submit">
            <span className="mx-auto">Update</span>
        </Button>

      </Form>
    </div>
    </div>
  );
};

export default Profile;
