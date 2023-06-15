import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  chargement: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  charger() {
    this.chargement = true;
    setTimeout(() => {
      this.chargement = false;
      this.router.navigate(['/administration']);
    }, 5000);
  }
}
