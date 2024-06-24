import axios, { AxiosInstance } from "axios"
import { API } from "../constants/constant"
import localStorageSevicer from "../services/localService"

const Authorization = {
    "Authorization":"Bearer " +localStorageSevicer.get()?.accessToken
}

export const https:AxiosInstance = axios.create({
    baseURL: API,
    headers: Authorization
  })