import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './home/home.component';

import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';


@NgModule({
  declarations: [
    RegisterComponent,
    HomeComponent,
   ],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
  ],
  exports: [
    RegisterComponent,
    HomeComponent,
  ]
})
export class PagesModule { }
