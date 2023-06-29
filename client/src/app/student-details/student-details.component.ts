import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  student = {
    name: 'John Doe',
    age: 18,
    grade: '12th',
    address: '123 Main St, City'
  };
  isMenuOpen: boolean = false;
  isLoggedIn: boolean = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    this.isLoggedIn = !this.isLoggedIn;
  }
  constructor(private router: Router) { }

  ngOnInit() {
  }
  logout(): void {
    // Perform logout logic here, such as clearing session data, etc.
    sessionStorage.removeItem('accessToken');

    // Redirect the user to the login page
    this.router.navigate(['/login']);
  }
  
}
