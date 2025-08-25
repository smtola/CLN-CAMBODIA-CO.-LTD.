import { NgOptimizedImage, CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Service{
  title: string;
  image:string;
  description?: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgOptimizedImage, CommonModule], 
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home {
  // All services data
  services: Service[] = [
    { title: 'Custom Clearance (Import / Export)', image: 'assets/image/custom clearance.jpg' },
    { title: 'Cross border (land transport)', image: 'assets/image/cross.png' },
    { title: 'Sea Freight', image: 'assets/image/ship.png' },
    { title: 'Air Freight', image: 'assets/image/airplan.png' },
    { title: 'Packing & Warehouse', image: 'assets/image/warehouse.jpg' },
    { title: 'International Express Courier', image: 'assets/image/international express.jpg' },
    { title: 'Consolidation', image: 'assets/image/consolidation.jpg' },
    { title: 'Door to Door Service', image: 'assets/image/door_to_door.jpg' }
  ];

  // Initially show 4 items
  visibleCount: number = 4;

  // Get the visible subset
  get visibleServices(): Service[] {
    return this.services.slice(0, this.visibleCount);
  }

  // Load more items
  loadMore() {
    const total = this.services.length;
    if (this.visibleCount < total) {
      this.visibleCount += 4;
    }
  }

  // Load fewer items
  loadLess() {
    if (this.visibleCount > 4) {
      this.visibleCount -= 4;
    }
  }

}
