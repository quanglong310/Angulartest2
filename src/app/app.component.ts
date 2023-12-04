import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HomeComponent, RouterModule],
  //templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  template: `
    <main>
      <header class="brand-name">
        <a href="#">
          <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
        </a>
      </header>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
`,
})
export class AppComponent {
  title = 'homes';
}
