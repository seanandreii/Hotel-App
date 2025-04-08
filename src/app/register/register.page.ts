import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import axios from 'axios';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class RegisterPage implements OnInit {
  fName: string = '';
  lName: string = '';
  email: string = '';
  password: string = '';

  constructor() { }

  ngOnInit() {}

  async onSubmit(event: Event) {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost/ionic-php/register.php', {
        signUp: true,
        fName: this.fName,
        lName: this.lName,
        email: this.email,
        password: this.password
      }, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
      const data = response.data;
      if (data.status === 'success') {
        
        window.location.href = 'http://localhost:8100/login';
      } else {
        
        alert(data.message);
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert('An error occurred during registration. Please try again.');
    }
  }
}
