import { combineReducers } from 'redux';
import loginReducer from '../components/login/login.reducer';

const rootReducer  = combineReducers({login:()=>loginReducer});

export default rootReducer;
