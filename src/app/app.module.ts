import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { initializeApp, } from 'firebase/app';
import { provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth} from '@angular/fire/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

var config = {

  apiKey: "AIzaSyBje6QNhObuyBUJjZ09nBsB3leD9Hv91KU",
  authDomain: "angular-framework-faed9.firebaseapp.com",
  projectId: "angular-framework-faed9",
  storageBucket: "angular-framework-faed9.appspot.com",
  messagingSenderId: "748052870514",
  appId: "1:748052870514:web:bfdb8f1fe972f8e93699eb"

}


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    PagesModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    BrowserAnimationsModule,
    
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
