import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgOptimizedImage, CommonModule],
  templateUrl: './products.html',
  styleUrls: ['./products.scss'],
})
export class Products implements OnInit {
  showPopup = false;
  categories = ['All', 'Export', 'Import'];
  selectedCategory = 'All';
  selectedProduct: string | null = null;

  visibleProduct: number = 2;
  visibleImage: number = 4;
  subCat = [
    { key: 'rice', category: 'Export', product: 'Rice' },
    { key: 'rubber', category: 'Export', product: 'Rubber' },
    { key: 'lo', category: 'Import', product: 'Lubricant Oil' },
    { key: 'personal_effect', category: 'Import', product: 'Personal Effect' },
    { key: 'soy_bean', category: 'Export', product: 'Soy Bean' },
    { key: 'pesticide', category: 'Import', product: 'Pesticide' },
    { key: 'fertillizer', category: 'Import', product: 'Fertillizer' },
    { key: 'farm_equipment', category: 'Import', product: 'Farm Equipment' },
    { key: 'dis', category: 'Import', product: 'Drip Irrigation System' },
    { key: 'aquarium_products', category: 'Import', product: 'Aquarium Products' },
    { key: 'tractors', category: 'Import', product: 'Tractors' },
    { key: 'implement', category: 'Import', product: 'Implement' },
    { key: 'sp', category: 'Import', product: 'Spare Parts' },
    { key: 'fresh_mango', category: 'Export', product: 'Fresh Mango' },
    { key: 'fresh_banana', category: 'Export', product: 'Fresh Banana' },
    { key: 'fresh_durian', category: 'Export', product: 'Fresh Durian' },
    { key: 'sugar_palm', category: 'Export', product: 'Sugar Palm' },
    { key: 'pepper', category: 'Export', product: 'Pepper' },
    { key: 'shelving_rack', category: 'Import', product: 'Shelving Rack and Light Fitting' },
    { key: 'furniture', category: 'Export', product: 'Furniture' },
    { key: 'bsapm', category: 'Export', product: 'Buddha Status And Pagoda Materials' },
    { key: 'veterinary_medicine', category: 'Import', product: 'Veterinary Medicine' }
  ];

  products = [
    {
      key: 'rice',
      category: 'Export',
      product: 'Rice',
      caption: 'Cambodia - France, Germany, Philippines and China',
      image: ['assets/image/products/rice/rice.jpeg'],
    },
    {
      key: 'rubber',
      category: 'Export',
      product: 'Rubber',
      caption: 'Cambodia - China',
      image: [
        'assets/image/products/rubber/rubber_1.jpg',
        'assets/image/products/rubber/rubber_2.jpg'
      ],
    },
    {
      key: 'lo',
      category: 'Import',
      product: 'Lubricant Oil',
      caption: '',
      image: [],
    },
    {
      key: 'personal_effect',
      category: 'Import',
      product: 'Personal Effect',
      caption: '',
      image: [],
    },
    {
      key: 'soy_bean',
      category: 'Export',
      product: 'Soy Bean',
      caption: '',
      image: [],
    },
    {
      key: 'pesticide',
      category: 'Import',
      product: 'Pesticide',
      caption: 'China, Thailand, Vietnam and Spain - Cambodia - Cambodia',
      image: [
        'assets/image/products/pesticide/pesticide_1.jpg',
        'assets/image/products/pesticide/pesticide_2.jpg',
        'assets/image/products/pesticide/pesticide_3.jpg'
      ],
    },
    {
      key: 'fertillizer',
      category: 'Import',
      product: 'Fertillizer',
      caption: 'China, Thailand, Vietnam and Spain - Cambodia',
      image: [
        'assets/image/products/fertillizer/fertillizer_1.jpg',
        'assets/image/products/fertillizer/fertillizer_2.jpg',
        'assets/image/products/fertillizer/fertillizer_3.jpg',
        'assets/image/products/fertillizer/fertillizer_4.jpg',
      ],
    },
    {
      key: 'farm_equipment',
      category: 'Import',
      product: 'Farm Equipment',
      caption: '',
      image: [],
    },
    {
      key: 'dis',
      category: 'Import',
      product: 'Drip Irrigation System',
      caption: 'China-Cambodia',
      image: [
        'assets/image/products/drip lrrigation system/dls_1.png',
        'assets/image/products/drip lrrigation system/dls_2.png',
        'assets/image/products/drip lrrigation system/dls_3.png'
      ],
    },
    {
      key: 'aquarium_products',
      category: 'Import',
      product: 'Aquarium Products',
      caption: '',
      image: [
        
      ],
    },
    {
      key: 'tractors',
      category: 'Import',
      product: 'Tractors',
      caption: 'Cambodia - India and Italy',
      image: ['assets/image/products/tractors/tractor_1.jpg',
        'assets/image/products/tractors/tractor_2.png',
        'assets/image/products/tractors/tractor_3.jpg'],
    },
    {
      key: 'implement',
      category: 'Import',
      product: 'Implement',
      caption: 'Cambodia - India and Italy',
      image: [
        'assets/image/products/implement/implement1.jpeg',
        'assets/image/products/implement/implement_2.jpg',
        'assets/image/products/implement/implement_3.jpg',
        'assets/image/products/implement/implement_4.jpg'
      ]
    },
    {
      key: 'sp',
      category: 'Import',
      product: 'Spare Parts',
      caption: 'Cambodia - India and Italy',
      image: [
        'assets/image/products/spare parts/sp_1.jpg',
        'assets/image/products/spare parts/sp_2.jpg',
        'assets/image/products/spare parts/sp_3.jpg',
        'assets/image/products/spare parts/sp_4.jpg'
      ]
    },
    {
      key: 'fresh_mango',
      category: 'Export',
      product: 'Fresh Mango',
      caption: 'Cambodia - China, Thailand, India, Dubai and Vietnam',
      image: [
        'assets/image/products/fresh mango/fresh_mango_1.jpg',
        'assets/image/products/fresh mango/fresh_mango_2.jpg',
        'assets/image/products/fresh mango/fresh_mango_3.png',
        'assets/image/products/fresh mango/fresh_mango_4.jpg',
        'assets/image/products/fresh mango/fresh_mango_5.jpg',
        'assets/image/products/fresh mango/fresh_mango_6.jpg'
      ]
    },
    {
      key: 'fresh_banana',
      category: 'Export',
      product: 'Fresh Banana',
      caption: 'Cambodia - China, Thailand, India, Dubai and Vietnam',
      image: [
        'assets/image/products/fresh banana/fresh_banana_1.png',
        'assets/image/products/fresh banana/fresh_banana_2.png'
      ]
    },
    {
      key: 'fresh_durian',
      category: 'Export',
      product: 'Fresh Durian',
      caption: 'Cambodia - China, Thailand, India, Dubai and Vietnam',
      image: [
        'assets/image/products/durian/durian_3.jpg',
        'assets/image/products/durian/durian_2.jpg',
        'assets/image/products/durian/durian_1.jpg',
        'assets/image/products/durian/durian_6.jpg',
        'assets/image/products/durian/durian_5.jpg',
        'assets/image/products/durian/durian_4.jpg'
      ]
    },
    {
      key: 'sugar_palm',
      category: 'Export',
      product: 'Sugar Palm',
      caption: 'Cambodia - Japan, Vietnam and Thailand',
      image: [],
    },
    {
      key: 'pepper',
      category: 'Export',
      product: 'Pepper',
      caption: 'Cambodia - Japan, Vietnam and Thailand',
      image: [
        'assets/image/products/pepper/pepper_2.jpg',
        'assets/image/products/pepper/pepper_3.jpg',
        'assets/image/products/pepper/pepper_4.jpg',
        'assets/image/products/pepper/pepper_1.jpg',
      ]
    },
    {
      key: 'shelving_rack',
      category: 'Import',
      product: 'Shelving Rack and Light Fitting',
      caption: '',
      image: [
        'assets/image/products/shelving rack and light fitting/sralf_1.png',
        'assets/image/products/shelving rack and light fitting/sralf_2.png',
        'assets/image/products/shelving rack and light fitting/sralf_3.png'
      ]
    },
    {
      key: 'furniture',
      category: 'Import',
      product: 'Furniture',
      caption: '',
      image: [
        'assets/image/products/furniture/furniture_1.png',
        'assets/image/products/furniture/furniture_2.png'
      ]
    },
    {
      key: 'bsapm',
      category: 'Export',
      product: 'Buddha Status And Pagoda Materials',
      caption: 'USA-Cambodia',
      image: [
        'assets/image/products/buddha status/buddha_status_1.jpg',
        'assets/image/products/buddha status/buddha_status_2.jpg'
      ],
    },
    {
      key: 'veterinary_midicine',
      category: 'Import',
      product: 'Veterinary Medicine',
      caption: 'Vietnam-Cambodia',
      image: []
    },
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      if (params['category'] && this.categories.includes(params['category'])) {
        this.selectedCategory = params['category'];
      }

      if (params['product']) {
        // If category is 'All', any product is allowed
        if (
          this.selectedCategory === 'All' ||
          this.subCat.some(
            (sc) => sc.product === params['product'] && sc.category === this.selectedCategory
          )
        ) {
          this.selectedProduct = params['product'];
        } else {
          this.selectedProduct = null;
        }
      } else {
        this.selectedProduct = null;
      }
    });
  }

  openPopup() {
    this.showPopup = true;
  }
  closePopup() {
    this.showPopup = false;
  }

  selectProduct(prod: string) {
    this.selectedProduct = prod === 'All' ? null : prod;

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { category: this.selectedCategory, product: prod === 'All' ? null : prod },
      queryParamsHandling: 'merge',
    });
  }

  selectCategory(cat: string) {
    this.selectedCategory = cat;
    this.selectedProduct = null;
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { category: cat },
      queryParamsHandling: 'merge',
    });
    this.closePopup();
  }

  get filteredSubCat() {
    if (this.selectedCategory === 'All') return this.subCat;
    return this.subCat.filter((sc) => sc.category === this.selectedCategory);
  }

  get filteredProducts() {
    let filtered = this.products;

    // Apply category filter
    if (this.selectedCategory !== 'All') {
      filtered = filtered.filter((p) => p.category === this.selectedCategory);
    }

    // Apply product filter
    if (this.selectedProduct) {
      filtered = filtered.filter((p) => p.product === this.selectedProduct);
    }

    // Show only visible items
    return filtered.slice(0, this.visibleProduct);
  }

  // Total filtered products for button logic
  get filteredProductsTotal() {
    let filtered = this.products;
    if (this.selectedCategory !== 'All')
      filtered = filtered.filter((p) => p.category === this.selectedCategory);
    if (this.selectedProduct) filtered = filtered.filter((p) => p.product === this.selectedProduct);
    return filtered.length;
  }

  getVisibleImages(item: any) {
    return item.image.slice(0, this.visibleImage);
  }

  loadMoreImages(item: any) {
    if (this.visibleImage < item.image.length) {
      this.visibleImage += 4;
    }
  }

  loadLessImages() {
    if (this.visibleImage > 4) {
      this.visibleImage -= 4;
    }
  }

  loadMore() {
    const total = this.filteredProductsTotal;
    if (this.visibleProduct < total) {
      this.visibleProduct += 2;
    }
  }

  // Show fewer products
  loadLess() {
    if (this.visibleProduct > 2) {
      this.visibleProduct -= 2;
    }
  }
}
