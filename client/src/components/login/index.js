import {useState, useEffect} from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import * as action from './login.action';
import './login.css';
const Login = (props)=>{
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const [userName, setUserName] = useState('');
    const [signUp,setSignUp] = useState(false);
    useEffect(()=>{
      console.log(props);
    },[])

    const tryLogin = ()=>{
      props.initiateLogin({userName: userName,password: password});
    }
    const trySignUp = ()=>{
      if(confirmpassword === password && userName){
        props.initiateSignUp({userName: userName,password: password});
        setUserName('');
        setPassword('');
      }
      else
      window.alert('password mismatch');
    }
    return (
      <>
       {!signUp?
        (<div className="login-container">
            <div>Login</div>
            <div>Username: <input type="text" value={userName} onChange={(e)=>{setUserName(e.target.value)}}/></div>
            <div>Password: <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/></div>
            <div><button onClick={tryLogin}>Submit</button><button onClick={()=>{setSignUp(true)}}>SignUp</button></div>
        </div>):(
          <div className="login-container">
          <div>Sign Up</div>
          <div>User Name: <input type="text" value={userName} onChange={(e)=>{setUserName(e.target.value)}}/></div>
          <div>Password: <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/></div>
          <div>Confirm Password: <input type="password" onChange={(e)=>{setConfirmPassword(e.target.value)}}/></div>
          <div><button onClick={trySignUp}>Submit</button><button onClick={()=>{
            setSignUp(false);setUserName('');setPassword('')}
          }>go back</button></div>
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