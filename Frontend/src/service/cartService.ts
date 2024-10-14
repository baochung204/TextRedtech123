import axios from '../configs/axios';

export default class CartService {
  static async getCartByUser() {
    const response = await axios.get('/carts/me');
    return response.data;
  }
}
