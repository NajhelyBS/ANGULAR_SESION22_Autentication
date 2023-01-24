import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroupDirective, NgForm, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent implements OnInit {


  public formRegistro!: FormGroup;


  constructor(
    private formBuilder:FormBuilder,
    private userservice:UserService,
    private router:Router,
    ){

      this.formRegistro = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    
    });}

  
ngOnInit(): void {
  
}
  

onSubmit(){
  this.userservice.registerUser(this.formRegistro.value)
  .then(response => {
    console.log(response);

    //alert registro exitoso
    Swal.fire({
      title: 'Genial!',
      text: 'Registro exitoso.',
      imageUrl: 'https://media.tenor.com/KgTaOloE588AAAAC/anime-like.gif',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'imagen',
    })

    this.router.navigate(['/login']);

  })
  .catch(error =>  console.log(error))
  
}

}