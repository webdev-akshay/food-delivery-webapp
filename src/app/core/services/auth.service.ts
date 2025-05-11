import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(username:string,password:string):boolean{
    if(username==='admin@admin.com' && password==='admin'){
      localStorage.setItem('user',JSON.stringify({username}))
      return true;
    }
    return false
  }
 isLoginIn(){
  return localStorage.getItem('user')
 }

}
