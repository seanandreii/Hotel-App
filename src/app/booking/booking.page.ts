import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonRouterLink, IonRouterOutlet, IonRouterLinkWithHref, } from '@ionic/angular/standalone';
import axios from 'axios';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonRouterLink, IonRouterOutlet, IonRouterLinkWithHref,]
})
export class BookingPage implements OnInit {
  name: string = '';
  email: string = '';
  phone: string = '';
  date: string = '';
  message: string = '';

  constructor() { }

  ngOnInit() { }

  async submitBooking() {
    if (!this.name || !this.email || !this.phone || !this.date || !this.message) {
      alert("All fields are required.");
      return;
    }

    try {
      const response = await axios.post('http://localhost/ionic-php/book.php', {
        name: this.name,
        email: this.email,
        phone: this.phone,
        date: this.date,
        message: this.message
      });

      if (response.data === "Booking submitted successfully.") {
        alert("Booking submitted successfully.");
      } else {
        alert("Failed to submit booking.");
      }
    } catch (error) {
      console.error("There was an error submitting the booking!", error);
      alert("There was an error submitting the booking!");
    }
  }
}
