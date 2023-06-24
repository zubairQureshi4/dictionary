import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import {db} from '../Connections/PlanetScaleDb'

const Login = ({setIsLogin, setSignIn}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
        const responseData = [
            email,
            password
        ];
        console.log(responseData);
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
      alert("Wrong email or password");
     }
 } catch (error) {
    alert("Wrong email or password");
 }
    
    }
  return (
    <div className=' bigSignUpDiv p-5'>
    <div className=" mainFormDiv">
    <div className='d-flex'>
      <h1 className='text-center text-light mx-auto'>Login</h1>
      <h5 className='loginButton' onClick={()=>{setIsLogin(true)}}>SignUp</h5>
    </div>
      <Form onSubmit={handleSignup}>
        <Form.Group controlId="formEmail">
          <Form.Label className='text-light'>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label className='text-light'>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant=" d-flex mx-auto mt-3 w-100 signupButton" type="submit">
            <span className="mx-auto">Login</span>
        </Button>

      </Form>
    </div>
    </div>
  );
};

export default Login;
