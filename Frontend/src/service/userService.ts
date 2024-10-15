import axios from '../configs/axios';

export default class UserService {
  static async getMyInfo() {
    const response = await axios.get('/users/me');
    return response.data;
  }

  static async getAllUsers() {
    const response = await axios.get('/users');
    return response.data;
  }
}
