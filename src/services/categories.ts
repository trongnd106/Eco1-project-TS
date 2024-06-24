import axios from "axios"
import { API } from "../constants/constant"

export const categoriesService ={
    getAll(){
        return axios.get(API + "/categories")
    }
} 