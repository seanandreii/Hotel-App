import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonRouterLink, IonRouterOutlet, IonRouterLinkWithHref, IonButtons, IonButton } from '@ionic/angular/standalone';
import { NavController } from '@ionic/angular';
import { AuthService } from '../auth.service';
import axios from 'axios';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonRouterLink, IonRouterOutlet, IonRouterLinkWithHref, IonButtons, IonButton]
})
export class LoginPage {

  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private navCtrl: NavController) { }

  async login() {

    console.log(this.email, this.password)
    try {
      const response = await this.authService.signIn(this.email, this.password);
      if (response.success) {
        this.navCtrl.navigateForward(['./tabs']);
      } else {
        console.log(response);
      }
    } catch (error) {
      alert('Login failed. Please try again.');
    }
  }
}
