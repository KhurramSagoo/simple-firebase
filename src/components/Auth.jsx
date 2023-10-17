import { signInWithPopup } from 'firebase/auth'
import {auth,provider} from '../firebase'
import Cookies from 'universal-cookie'
import { useNavigate } from 'react-router-dom';

const cookies = new Cookies()

function Auth() {
  const navigate = useNavigate();
  const signInWithGoogle= async()=>{
    try {
      const result=  await signInWithPopup(auth, provider)
      cookies.set("auth-token", result.user.refreshToken)
     //  console.log(result)
     navigate('/home');
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
        <p>
          Sign in whith google to continue
        </p>
        <button onClick={signInWithGoogle}>
          sign in with google
        </button>

    </div>
  )
}

export default Auth