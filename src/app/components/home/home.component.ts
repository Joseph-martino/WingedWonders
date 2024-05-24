import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  title!: string;
  subtitle!: string;

  constructor(private router: Router){

  }

  ngOnInit(): void {
      this.title = "Bienvenue sur WingedWonder";
      this.subtitle = "L'encyclopédie sur oiseaux";
  }

  onEnter(){
    this.router.navigateByUrl("birds");
  }

}
