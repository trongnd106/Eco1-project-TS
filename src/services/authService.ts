import { API } from "../constants/constant"
import { https } from "../configs/axios"
import {SignUp,SignIn} from "../types/auth"

const authService = {
    signup(data:SignUp){
        return https.post(`${API}users/signup`,data)
    },
    signin(data:SignIn){
        return https.post(`${API}users/signin`,data)
    }
}
export default authService