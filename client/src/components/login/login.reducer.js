const initialState = {};
const loginReducer = (state=initialState,type)=>{
   switch (type?.action){
       case 'LOGIN_SUCCESS' : {
           return {...state,userName: type?.payload?.user,token: type?.payload?.token}
       }
   }
}

export default loginReducer;