import axios from "axios";
import { UserType } from "../../types/userType";

const API_URL = "/api/user";

const register = async (userData: UserType) => {
  const response = await axios.post(API_URL, userData);
  return response.data;
};

const login = async (userData: UserType) => {
  const res = await axios.post(`${API_URL}/login`, userData);
  return res.data;
};

const authService = { register, login };

export default authService;
