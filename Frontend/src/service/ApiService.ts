import axios from 'axios';

export default class ApiService {
    static BASE_URL = 'https://redai02-4af4309fd76b.herokuapp.com'; // Dựa trên URL API của bạn

    static getHeader() {
        const token = localStorage.getItem('accessToken');
        return {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        };
    }

    // Cart
    static async getCartByUser() {
        const response = await axios.get(`${this.BASE_URL}/api/v1/carts/me`, {
            headers: this.getHeader(),
        });
        return response.data;
    }

    // Products
    static async getProductById(productId: any) {
        const response = await axios.get(`${this.BASE_URL}/api/v1/products/${productId}`, {
            headers: this.getHeader(),
        });
        return response.data;
    }

    static async getProductByTagId(tagId: any) {
        const response = await axios.get(`${this.BASE_URL}/api/v1/products/tag/${tagId}`, {
            headers: this.getHeader(),
        });
        return response.data;
    }

    static async getProductByCategoryId(categoryId: any) {
        const response = await axios.get(
            `${this.BASE_URL}/api/v1/categories/${categoryId}/products`,
            {
                headers: this.getHeader(),
            },
        );
        return response.data;
    }

    // Categories
    static async getAllCategories() {
        const response = await axios.get(`${this.BASE_URL}/api/v1/categories/get-all`, {
            headers: this.getHeader(),
        });
        return response.data;
    }

    // User-related APIs
    static async getMy2FA() {
        const response = await axios.get(`${this.BASE_URL}/api/v1/users/me/2fa`, {
            headers: this.getHeader(),
        });
        return response.data;
    }

    static async getMyInfo() {
        const response = await axios.get(`${this.BASE_URL}/api/v1/users/me`, {
            headers: this.getHeader(),
        });
        return response.data;
    }

    static async getAllUsers() {
        const response = await axios.get(`${this.BASE_URL}/api/v1/users`, {
            headers: this.getHeader(),
        });
        return response.data;
    }

    // Authentication APIs
    static async loginUser(account: string, password: string) {
        const response = await axios.post(`${this.BASE_URL}/api/v1/auth/login`, {
            account: account,
            password: password,
        });
        return response.data;
    }

    static async registerUser(registration: any) {
        const response = await axios.post(`${this.BASE_URL}/api/v1/auth/register`, registration);
        return response.data;
    }

    static async loginWithGoogle(googleCode: string) {
        try {
            const response = await axios.post(
                `${this.BASE_URL}/api/v1/auth/login-google?code=${googleCode}`,
            );
            return response.data;
        } catch (error: any) {
            // Xử lý lỗi
            console.error('Error logging in with Google:', error);
            return error.response.data;
        }
    }

    // 2FA APIs
    static async send2FA(account: string, type: string) {
        const response = await axios.post(`${this.BASE_URL}/api/v1/auth/send-2fa`, {
            account,
            type,
        });
        return response.data;
    }

    static async verify2FA(account: string, type: string, code: string) {
        const response = await axios.post(`${this.BASE_URL}/api/v1/auth/verify-2fa`, {
            account,
            type,
            code,
        });
        return response.data;
    }

    static async set2FA(type: string) {
        const response = await axios.post(`${this.BASE_URL}/api/v1/auth/setting-2fa`, { type });
        return response.data;
    }

    // Password APIs
    static async changePassword(oldPassword: string, password: string, confirmPassword: string) {
        const response = await axios.post(`${this.BASE_URL}/api/v1/auth/change-password`, {
            oldPassword,
            password,
            confirmPassword,
        });
        return response.data;
    }

    static async forgotPassword(email: string) {
        const response = await axios.post(`${this.BASE_URL}/api/v1/auth/forgot-password`, {
            email,
        });
        return response.data;
    }

    // Bookings
    static async getBookingByConfirmationCode(confirmationCode: any) {
        const response = await axios.get(
            `${this.BASE_URL}/api/v1/bookings/get-by-confirmation-code/${confirmationCode}`,
            {
                headers: this.getHeader(),
            },
        );
        return response.data;
    }

    // General methods for authentication
    static logout() {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('roles');
        localStorage.removeItem('userId');
    }

    static isAuthenticated() {
        const token = localStorage.getItem('accessToken');
        const tokenExpired = localStorage.getItem('tokenExpired');
        console.log("Token:", token);
        console.log("Token Expired:", tokenExpired);
        
        if (!token || !tokenExpired) {
            return false; // Không có token hoặc thời gian hết hạn
        }
    
        // Chuyển đổi tokenExpired từ chuỗi thành đối tượng Date
        const expirationTime = new Date(tokenExpired);
        console.log("Expiration Time:", expirationTime);
        
        // Kiểm tra xem expirationTime có hợp lệ không
        if (isNaN(expirationTime.getTime())) {
            console.log("Expiration time is invalid");
            return false; // Nếu không phải là ngày hợp lệ, trả về false
        }
    
        const currentTime = new Date();
        console.log("Current Time:", currentTime);
    
        // So sánh thời gian hiện tại với thời gian hết hạn
        const isValid = currentTime < expirationTime;
        console.log("Is Valid:", isValid);
        return isValid;
    }    

    static isAdmin() {
        const roles = JSON.parse(localStorage.getItem('roles') || '[]'); // Lấy mảng roles từ localStorage
        return roles.includes('ADMIN'); // Kiểm tra nếu mảng chứa 'ADMIN'
    }

    static isUser() {
        const roles = JSON.parse(localStorage.getItem('roles') || '[]'); // Lấy mảng roles từ localStorage
        return roles.includes('USER'); // Kiểm tra nếu mảng chứa 'USER'
    }
}
