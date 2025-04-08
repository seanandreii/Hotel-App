import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"hotel-app-12cdb","appId":"1:54166686923:web:47dc542d3405a328431f4e","storageBucket":"hotel-app-12cdb.appspot.com","apiKey":"AIzaSyC-E9A22MkB9o72A82TEentAJ9ZNvS5mc4","authDomain":"hotel-app-12cdb.firebaseapp.com","messagingSenderId":"54166686923","measurementId":"G-LR53PGBTSL"})), provideAuth(() => getAuth()), provideFirebaseApp(() => initializeApp({"projectId":"hotel-app-12cdb","appId":"1:54166686923:web:47dc542d3405a328431f4e","storageBucket":"hotel-app-12cdb.appspot.com","apiKey":"AIzaSyC-E9A22MkB9o72A82TEentAJ9ZNvS5mc4","authDomain":"hotel-app-12cdb.firebaseapp.com","messagingSenderId":"54166686923","measurementId":"G-LR53PGBTSL"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()),
  ],
});
