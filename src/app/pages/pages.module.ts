import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './home/home.component';

import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { ListproductosComponent } from './listproductos/listproductos.component';
import { NewproductosComponent } from './newproductos/newproductos.component';

@NgModule({
  declarations: [
    RegisterComponent,
    HomeComponent,
    ListproductosComponent,
    NewproductosComponent
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
    ListproductosComponent,
    NewproductosComponent,
  ]
})
export class PagesModule { }
