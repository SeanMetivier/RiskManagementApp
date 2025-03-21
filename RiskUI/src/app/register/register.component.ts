import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-register',
  standalone: true,
  imports: [  RouterModule, MatCardModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatIconModule, MatSelectModule, FormsModule, CommonModule ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {

  user = {
    username: '',
    emailAddress: '',
    password: '',
    firstName: '',
    lastName: '',
    organizationID: null

  };

  hidePassword = true;
  organizations: any[] = [];
  organization: string = '';

  constructor(private http: HttpClient, private router: Router ) {}

  ngOnInit() {
    this.fetchOrganizations();
  }

  private fetchOrganizations() {
    this.http.get<any[]>('http://localhost:3000/organizations')
      .subscribe({
        next: (data) => {
          console.log('Organizations fetched:', data);
          this.organizations = data;
        },
          
        error: (error) => {
          console.error('Error fetching organizations:', error);
        }
      });
  }

  registerUser() {
    this.http.post('http://localhost:3000/users/register', this.user)
      .subscribe({
        next: (response) => {
          console.log('User successfully registered:', response);
          alert('User successfully registered! Please login to continue.');
          this.router.navigate(['/login']);
        },
        error: (error) => {
          console.error('Error registering user:', error);
          alert('Error registering user. Please try again.');
        }
      });
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }
}


