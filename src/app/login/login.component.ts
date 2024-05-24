import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{

  message: string = "Vous êtes déconnecté";
  pseudo!: string;
  password!: string;
  auth!: AuthService;

  constructor(private authService: AuthService, private router: Router){

  }


  ngOnInit(): void {
      this.auth = this.authService;
  }

  setMessage(){
    if(this.authService.isLoggedIn){
      this.message = "Vous êtes connecté";
    } else {
      this.message = "identifiant ou mot de passe incorrect";
    }
  }


  login(){
    this.message = "connexion en cours...";
    this.authService.login(this.pseudo, this.password)
    .subscribe((isLoggedIn: boolean) => {
      this.setMessage();
      if(isLoggedIn){
        this.router.navigateByUrl('/birds');
      } else {
        this.password = "";
        this.router.navigateByUrl("/login");
      }
    })
  }

  logout(){
    this.authService.logout();
    this.message = "Vous êtes déconnecté";
  }

}
