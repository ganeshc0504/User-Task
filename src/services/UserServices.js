// fetching data from API
import axios from 'axios'

class UserService {

    static fetchUser(){
        return  axios.get("https://jsonplaceholder.typicode.com/users");
    }// fetch User    
    
    }
 
export default UserService;



