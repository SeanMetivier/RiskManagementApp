import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ RouterModule, MatCardModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatIconModule, FormsModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  user = {
    emailAddress: '',
    password: ''
  };

  


  hidePassword = true;

  constructor(private http: HttpClient, private router: Router) {}

  loginUser() {

    if (!this.user.emailAddress || !this.user.password) {
      alert('Please enter a valid Email and Password!'); 
      return;
    }

    this.http.post<LoginResponse>('http://localhost:3000/users/login',this.user)
    .subscribe({
        next: (response) => {
          console.log('User successfully logged in:', response);
          alert('User successfully logged in!');
          localStorage.setItem('token', response.token);
          this.router.navigate(['/dashboard']);
        },
        error: (error) => {
          console.error('Error logging in:', error);
          alert('Invalid username or password');
        }
      });
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }



  

}

interface LoginResponse {
  token: string;
}


