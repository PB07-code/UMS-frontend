import axios from "axios";
import { getToken } from "./AuthService";

// Add a request interceptor
 axios.interceptors.request.use(function (config) {
      config.headers['Authorization'] = getToken();
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  }); 
  


const REST_API_BASE_URL = 'http://localhost:8080/api/users';


export const listUsers = () => axios.get(REST_API_BASE_URL);

export const createUser = (user) => axios.post(REST_API_BASE_URL, user);

export const getUser = (userId) => axios.get(REST_API_BASE_URL + '/' + userId);

export const deleteUser = (userId) => axios.delete(REST_API_BASE_URL + '/' + userId);

export const updateUser = (userId, user) => axios.put(REST_API_BASE_URL + '/' + userId, user);


