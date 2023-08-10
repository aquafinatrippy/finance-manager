import axios from "axios";
import { UserType } from "../../types/userType";

const API_URL = "/api/user";

const register = async (userData: UserType) => {
  const res = await axios.post(API_URL, userData);
  if (res.data) {
    localStorage.setItem("user", JSON.stringify(res.data));
  }
  return res.data;
};

const login = async (userData: UserType) => {
  const res = await axios.post(`${API_URL}/login`, userData);
  if (res.data) {
    localStorage.setItem("user", JSON.stringify(res.data));
  }
  return res.data;
};

const authService = { register, login };

export default authService;
