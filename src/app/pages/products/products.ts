import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgOptimizedImage, CommonModule],
  templateUrl: './products.html',
  styleUrls: ['./products.scss']
})
export class Products implements OnInit {
  showPopup = false;
  categories = ['All', 'Export', 'Import'];
  selectedCategory = 'All';
  selectedProduct: string | null = null;

  visibleProduct:number = 1;

  subCat = [
    {key:'rice', category:'Export', product:'Rice'},
    {key:'durian', category:'Export', product:'Durian'},
    {key:'rubber', category:'Import', product:'Rubber'},
    {key:'paf', category:'Import', product:'PAF'},
  ];

  products = [
    {key: 'rice', category: 'Export', product: 'Rice', caption: 'Cambodia-China',
     image: ['assets/image/air_freight.jpg', 'assets/image/air_freight.jpg', 'assets/image/air_freight.jpg']},
    {key: 'durian', category: 'Export', product: 'Durian', caption: 'Fresh Durian Export',
     image: ['assets/image/air_freight.jpg', 'assets/image/air_freight.jpg', 'assets/image/air_freight.jpg']},
    {key: 'paf', category: 'Import', product: 'PAF', caption: 'PAF Materials',
     image: ['assets/image/air_freight.jpg', 'assets/image/air_freight.jpg', 'assets/image/air_freight.jpg']},
    {key: 'rubber', category: 'Import', product: 'Rubber', caption: 'Rubber Materials',
     image: ['assets/image/air_freight.jpg', 'assets/image/air_freight.jpg', 'assets/image/air_freight.jpg']},
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['category'] && this.categories.includes(params['category'])) {
        this.selectedCategory = params['category'];
      }
    
      if (params['product']) {
        // If category is 'All', any product is allowed
        if (this.selectedCategory === 'All' || 
            this.subCat.some(sc => sc.product === params['product'] && sc.category === this.selectedCategory)) {
          this.selectedProduct = params['product'];
        } else {
          this.selectedProduct = null;
        }
      } else {
        this.selectedProduct = null;
      }
    });
    
  }
  
  openPopup() { this.showPopup = true; }
  closePopup() { this.showPopup = false; }

  selectProduct(prod: string) {
    this.selectedProduct = prod === 'All' ? null : prod;
  
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { category: this.selectedCategory, product: prod === 'All' ? null : prod },
      queryParamsHandling: 'merge'
    });
  }
  

  selectCategory(cat: string) {
    this.selectedCategory = cat;
    this.selectedProduct = null;
    this.router.navigate([], { relativeTo: this.route, queryParams: { category: cat }, queryParamsHandling: 'merge' });
    this.closePopup();
  }


  get filteredSubCat() {
    if (this.selectedCategory === 'All') return this.subCat;
    return this.subCat.filter(sc => sc.category === this.selectedCategory);
  }

  get filteredProducts() {
    let filtered = this.products;
  
    // Apply category filter
    if (this.selectedCategory !== 'All') {
      filtered = filtered.filter(p => p.category === this.selectedCategory);
    }
  
    // Apply product filter
    if (this.selectedProduct) {
      filtered = filtered.filter(p => p.product === this.selectedProduct);
    }
  
    // Show only visible items
    return filtered.slice(0, this.visibleProduct);
  }
  
  // Total filtered products for button logic
  get filteredProductsTotal() {
    let filtered = this.products;
    if (this.selectedCategory !== 'All') filtered = filtered.filter(p => p.category === this.selectedCategory);
    if (this.selectedProduct) filtered = filtered.filter(p => p.product === this.selectedProduct);
    return filtered.length;
  }

  loadMore() {
    const total = this.filteredProductsTotal;
    if (this.visibleProduct < total) {
      this.visibleProduct += 1;
    }
  }

  // Show fewer products
  loadLess() {
    if (this.visibleProduct > 1) {
      this.visibleProduct -= 1;
    }
  }
}
