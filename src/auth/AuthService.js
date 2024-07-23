import axiosInstance from './axiosInstance';

const API_URL = '/auth';

class AuthService {
  login(user) {
    return axiosInstance
      .post(`${API_URL}/login`, {
        email: user.email,
        password: user.password
      })
      .then(response => {
        if (response.data.token) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
      });
  }
  register(user) {
    return axiosInstance
      .post(`${API_URL}/register`, {
        name: user.name,
        email: user.email,
        password: user.password
      })
      .then(response => {
        if (response.data.token) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }

  isAuthenticated() {
    return this.getCurrentUser() !== null;
  }
}

export default new AuthService();
