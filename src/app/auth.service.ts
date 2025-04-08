import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  async signIn(email: string, password: string) {
    try {
      const response = await axios.post('http://localhost/ionic-php/signin.php', {
        email: email,
        password: password
      });
      return response.data;
    } catch (error) {
      console.error('Error during login:', error);
      throw error;
    }
  }
}
