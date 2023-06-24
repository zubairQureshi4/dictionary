/* eslint-disable react/prop-types */
import  { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import {db} from '../Connections/PlanetScaleDb'
import NewAlert from './Alert';

const SignUp = ({setIsLogin, setSignIn}) => {

const shiftToLogin = () =>{
    setIsLogin(false)
}

  const [fullName, setFullName] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [alertvarient, setVarient] = useState('Danger');
  const [text, setText] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    // Handle the signup logic here
    // You can perform validation, API calls, etc.
    // Ensure password and confirm password match
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
        const responseData = [
            fullName,
            email,
            contact,
            password
        ];
        console.log(responseData);
        const query =
"INSERT INTO users (`username`, `email`, `contact`, `password`) VALUES (?, ?, ?, ?)";
 try {
     await db.execute(query, responseData);
    setShowAlert(true)
    setVarient('primary')
    setText('User created successfully')
 } catch (error) {
  setShowAlert(true)
  setVarient('danger')
  setText('Check Input Fields')
 }
    
    }
  return (
    <div className=' bigSignUpDiv p-5'>
    {showAlert && <NewAlert variant={alertvarient} text={text} setShowAlert={setShowAlert}/>}
    <div className=" mainFormDiv">
    <div className='d-flex'>
      <h1 className='text-center text-light mx-auto'>Sign Up</h1>
      <h5 className='loginButton' onClick={shiftToLogin}>Login</h5>
    </div>
      <Form onSubmit={handleSignup}>
        <Form.Group controlId="formFullName">
          <Form.Label className='text-light'>Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formContact">
          <Form.Label className='text-light'>Contact</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter your contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
          />
        </Form.Group>

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

        <Form.Group controlId="formConfirmPassword">
          <Form.Label className='text-light'>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant=" d-flex mx-auto mt-3 w-100 signupButton" type="submit">
            <span className="mx-auto">Sign Up</span>
        </Button>

      </Form>
    </div>
    </div>
  );
};

export default SignUp;
