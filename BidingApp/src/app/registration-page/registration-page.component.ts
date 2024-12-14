import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registration-page',
  standalone: true, // Mark as standalone
  imports: [CommonModule, ReactiveFormsModule], // Include required modules here
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css'],
})
export class RegistrationPageComponent {
  signupForm: FormGroup;
  loginForm: FormGroup;
  isSignup: boolean = false;
  isLogin: boolean = false;
  selectedRole: string | null = null;

  constructor(private fb: FormBuilder) {
    // Initialize signup form
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      username: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      adminCode: [''],
      businessName: [''],
      favoriteCategory: ['']
    });

    // Initialize login form
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  showSignup(): void {
    this.isSignup = true;
    this.isLogin = false;
  }

  showLogin(): void {
    this.isLogin = true;
    this.isSignup = false;
  }

  selectRole(role: string): void {
    this.selectedRole = role;
    this.isLogin = true;
    this.isSignup = false;
    // Reset login form on role selection
    this.loginForm.reset();
  }

  onSubmit(): void {
    if (this.signupForm.valid) {
      console.log(this.signupForm.value);
    }
  }

  onLoginSubmit(): void {
    if (this.loginForm.valid) {
      console.log(`Logging in as ${this.selectedRole}:`, this.loginForm.value);
    }
  }
}
