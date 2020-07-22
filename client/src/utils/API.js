import axios from "axios";



export default {

  signUp: function (userData) {
    return axios.post("/register", userData)
  },
  signIn: function (userData) {
    return axios.post("/login", userData)
  },
  getUser: function () {
    return axios.get("/user")
  },
  Logout: function () {
    return axios.get("/logout")
  },
  
}






