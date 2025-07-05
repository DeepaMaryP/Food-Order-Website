const logInUserName = "admin@gmail.com"
const logInPassword="admin"

export function doLogin(userName,password) {
 if(userName == logInUserName && password == logInPassword){
    return true;
 }
 return false;
}