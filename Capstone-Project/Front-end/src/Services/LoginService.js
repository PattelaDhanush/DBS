import axios from 'axios';

const Login_Service_Url="http://localhost:8093/custodian"

class LoginService{

    
    getUserId(userid){
        return axios.get(Login_Service_Url+"/"+userid);
    }

}

export default new LoginService();