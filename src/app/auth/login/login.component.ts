import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from './../../core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  loginForm!:FormGroup;
  constructor(private fb:FormBuilder ,private authService:AuthService, private router:Router){
    this.loginForm=this.fb.group( {
      email:['',[Validators.required, Validators.email]],
      password:['',[Validators.required]]
    })

  }

  onSubmit(){
    // this.authService.isLoginIn()

    if(this.loginForm.valid){
      const {email,password}=this.loginForm.value
      const isSuccess=this.authService.login(email,password);
      if(isSuccess){
        alert("Login Successfully")
        this.router.navigate(['/home'])

      }else{
      alert("Login Falied")
    }
  }
  }
  ngOnInit(): void {

  }

}
