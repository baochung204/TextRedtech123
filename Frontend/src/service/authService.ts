import axios from '../configs/axios';

export default class AuthService {
  static async loginUser(account: string, password: string) {
    const response = await axios.post('/auth/login', { account, password });
    return response.data;
  }

  static async registerUser(registration: any) {
    const response = await axios.post('/auth/register', registration);
    return response.data;
  }

  static async loginWithGoogle(googleCode: string) {
    try {
      const response = await axios.post(`/auth/login-google?code=${googleCode}`);
      return response.data;
    } catch (error: any) {
      console.error('Error logging in with Google:', error);
      return error.response.data;
    }
  }
}
