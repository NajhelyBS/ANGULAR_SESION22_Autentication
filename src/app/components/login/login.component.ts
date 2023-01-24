import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { FormControl, Validators } from '@angular/forms';
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formLogin!: FormGroup;


  constructor(
    private formBuilder:FormBuilder, 
    private userservice:UserService, 
    private router:Router ){

      this.formLogin = new FormGroup({
        email: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required]),
      
      });}
   
   ngOnInit(): void {
     
   }


   
   Logearse(){

    this.userservice.login(this.formLogin.value)
    .then(response => {
      console.log(response);
  
      //alert iniciado con éxito
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Inicio ',
        showConfirmButton: false,
        timer: 1500
      });
  
      this.router.navigate(['/home']);
  
    })
    .catch(error =>  console.log(error))
    
  }

    }



    





