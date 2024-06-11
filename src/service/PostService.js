// src/service/PostService.js

import axios from "axios";
import { API } from "@/config/ConfigPosts";
// const API_URL = "http://localhost:3000/api/items";


class PostService {
  // Método para obtener todos los ítems
  async fetchAll() {
    try {
      const response = await axios.get(`${API}api/items`);
    
      return response.data;
    } catch (error) {
      console.error("Error al obtener los ítems:", error);
      throw error;
    }
  }

  async fetchById(id) {
    const response = await axios.get(`${API}/${id}`);
    console.log(response.data, "rolktrlg service");
    return response.data;
  }
}

export default new PostService();
