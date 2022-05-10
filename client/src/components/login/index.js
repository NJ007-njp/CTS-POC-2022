import {useState, useEffect} from 'react';
import './login.css';
const Login = ()=>{
    const [loginData, setLoginData] = useState({userName:'',password:''});
    return (
      <div className="login-container">
          <div>Login</div>
          <div>Username: <input type="text" /></div>
          <div>Password: <input type="password" /></div>
          <div><button onClick={tryLog()}>Submit</button></div>
      </div>
    )
}

export default Login;