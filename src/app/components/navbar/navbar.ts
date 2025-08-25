import { NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { QuoteModal } from '../../quote-modal/quote-modal';

@Component({
  selector: 'navbar',
  imports: [RouterModule, NgOptimizedImage, QuoteModal],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar implements OnInit {
  activeTab: string = 'land';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.activeTab = params['tab'] || 'land';
    });
  }
}
