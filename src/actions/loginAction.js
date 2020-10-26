import loginCred from '../json/login.json';
import { message } from 'antd';

export const Login = (values) => (dispatch) =>{
    console.log("login",loginCred);
    if(loginCred.username === values.username && loginCred.password === values.password){
        dispatch({
            type: "LOGGEDIN",
            payload: true
        })
    }
    else
    message.error("Invalid username or password",5)
}