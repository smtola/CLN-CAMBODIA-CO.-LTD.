import { Component, HostListener, OnInit, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import AOS from 'aos';
import { Loading } from './components/loading/loading';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar,NgOptimizedImage, CommonModule, Loading],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  protected readonly title = signal('cln-webiste');
  showScrollTop = false; // whether button is visible

  // Listen to window scroll
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;

    this.showScrollTop = scrollPercent > 10; // show button after 40% scroll
  }

  scrollToTop() {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }

  ngOnInit(): void {
    (AOS as any).init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true
    });
  }
  isLoading = true;
  constructor(router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        setTimeout(() => this.isLoading = false, 800); // simulate loading delay
      }
    });
  }
}
