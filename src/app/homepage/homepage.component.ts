import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import * as Flickity from 'flickity';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements AfterViewInit {
  @ViewChild('carousel') carousel!: ElementRef;

  isHovered: boolean = false;

  onMouseEnter(): void {
    this.isHovered = true;
  }

  onMouseLeave(): void {
    this.isHovered = false;
  }

  heroPath = 'assets/img/hero-page/';
  storyPath = 'assets/img/story-photo/';
  downloadPath = 'assets/img/hero-page/';

  ngAfterViewInit() {
    this.initCarousel();
  }

  initCarousel() {
    const flkty = new Flickity(this.carousel.nativeElement, {
      wrapAround: true, // Enable wrap around
      prevNextButtons: false,
      imagesLoaded: true,
      autoPlay: 1700,
      resize: false,
      adaptiveHeight: true
      // Other options...
    });
    flkty.resize(); // Optional: Resize the carousel after images are loaded
  }
}

