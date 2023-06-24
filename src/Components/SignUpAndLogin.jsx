import {useState} from 'react'
import SignUp from './SignUp';
import Login from './Login';

const SignUpAndLogin = ({setSignIn}) => {
    const [isLogin, setIsLogin] = useState(false);
  return (
    <>
    {isLogin ? 
        <SignUp setIsLogin={setIsLogin} setSignIn={setSignIn}/>
    :
        <Login setIsLogin={setIsLogin} setSignIn={setSignIn}/>
    }
    </>
  )
}

export default SignUpAndLogin