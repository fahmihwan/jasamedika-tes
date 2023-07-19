import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private Router: Router) {}
  addRole(role: string) {
    localStorage.setItem('role', role);
    this.Router.navigate(['/home']);
  }
}
