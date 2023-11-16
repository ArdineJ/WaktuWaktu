import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'test';

  isPinkBackground: boolean;

  constructor(private router: Router) {
    this.isPinkBackground = true; // Set the initial value based on your requirement
  }
 ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentRoute = event.urlAfterRedirects;
        this.isPinkBackground = this.shouldHavePinkBackground(currentRoute);
      }
    });
  }

  shouldHavePinkBackground(currentRoute: string): boolean {
    return currentRoute.includes('features') || currentRoute.includes('about');
  }

}
