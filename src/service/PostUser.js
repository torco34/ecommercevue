import axios from "axios";
import { API } from "@/config/ConfigPosts";

// registre
export const createUser = async (userData) => {
    try {
      const response = await axios.post(`${API}api/users`, userData);
      return response.data;
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    }
  };

//   login

export const loginUser = async (credentials) => {
    try {
      const response = await axios.post(`${API}api/login`, credentials);
      return response.data;
    } catch (error) {
      console.error("Error logging in:", error);
      throw error;
    }
  };