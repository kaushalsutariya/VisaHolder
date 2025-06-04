import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMsg: string = '';

  constructor(private router: Router) { }

  login() {
    
    const validUsername = 'kano';
    const validPassword = '1724';

    if (this.username === validUsername && this.password === validPassword) {
      this.errorMsg = 'Login successful!';
      setTimeout(() => {
        this.errorMsg = '';
        this.router.navigate(['/visa-form']);
      }, 1000);
    } else {
      this.errorMsg = 'Username And Password Is Mandatory.';
    }
  }
}
