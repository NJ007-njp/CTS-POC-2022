import {useState, useEffect} from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import * as action from './login.action';
import './login.css';
const Login = (props)=>{
    const [password, setPassword] = useState('');
   // const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');
    const [signUp,setSignUp] = useState(false);
    useEffect(()=>{
      console.log(props);
    },[])

    const tryLogin = ()=>{
      props.initiateLogin({userName: userName,password: password});
    }
    const trySignUp = ()=>{
      props.initiateSignUp({userName: userName,password: password});
      setUserName('');
      setPassword('');
    }
    return (
      <>
       {!signUp?
        (<div className="login-container">
            <div>Login</div>
            <div>Username: <input type="text" onChange={(e)=>{setUserName(e.target.value)}}/></div>
            <div>Password: <input type="password" onChange={(e)=>{setPassword(e.target.value)}}/></div>
            <div><button onClick={tryLogin}>Submit</button></div>
            <div><button onClick={()=>{setSignUp(true)}}>SignUp</button></div>
        </div>):(
          <div className="signup-container">
          <div>Sign Up</div>
          <div>User Name: <input type="text" onChange={(e)=>{setUserName(e.target.value)}}/></div>
          <div>Password: <input type="password" onChange={(e)=>{setPassword(e.target.value)}}/></div>
          <div>Confirm Password: <input type="password" onChange={(e)=>{setPassword(e.target.value)}}/></div>
          <div><button onClick={trySignUp}>Submit</button></div>
      </div>
        )}
      </>
    )
}
const mapStateToProps = (state) => ({ state });
const mapDispatchToProps = (dispatch) => {
  const boundActions = bindActionCreators({ ...action }, dispatch)
  return {
    ...boundActions,
    dispatch,
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);