import { Component } from '@angular/core';
import { Router } from '@angular/router';
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router:Router){}

  Logout() {
    Swal.fire({
      title: 'Estás seguro que quieres cerrar sesión?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Adiós!',
          'Has cerrado sesión.',
          'success');
          this.router.navigate(['/']);               
      }     

    }); 

  }
}
