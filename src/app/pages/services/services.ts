import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-services',
  imports: [NgOptimizedImage, CommonModule],
  templateUrl: './services.html',
  styleUrl: './services.scss'
})
export class Services implements OnInit {
  tabs = [
    { key: 'land', label: 'Land freight' },
    { key: 'air', label: 'Air freight' },
    { key: 'sea', label: 'Sea freight' },
    { key: 'custom', label: 'Custom Clearance' },
    { key: 'packing', label: 'Packing & Warehouse' },
    { key: 'iec', label: 'IEC' },
    { key: 'consolidation', label: 'Consolidation' },
    { key: 'door2door', label: 'DTD Service' },
  ];

  services = [
    {key: 'land', title:'Inland Freight', description:' CLN Logistics has a full capability in handling shipment for customer from A to Z with the full correspondence of back up, feedback and responsibility. We have done successful for customersʼ shipments with difference commodities and in a difference time with professing un-stuff as below pictures attached herewith.', image:'assets/image/truck.jpg'},
    {key: 'air', title:'Air Freight', description:' CLN Logistics has a full capability in handling shipment for customer from A to Z with the full correspondence of back up, feedback and responsibility. We have done successful for customersʼ shipments with difference commodities and in a difference time with professing un-stuff as below pictures attached herewith.', image:'assets/image/airplan.png'},
    {key: 'sea', title:'Sea Freight', description:' CLN Logistics has a full capability in handling shipment for customer from A to Z with the full correspondence of back up, feedback and responsibility. We have done successful for customersʼ shipments with difference commodities and in a difference time with professing un-stuff as below pictures attached herewith.', image:'assets/image/ship.png'},
    {key: 'custom', title:'Custom Clearance', description:' CLN Logistics has a full capability in handling shipment for customer from A to Z with the full correspondence of back up, feedback and responsibility. We have done successful for customersʼ shipments with difference commodities and in a difference time with professing un-stuff as below pictures attached herewith.', image:'assets/image/custom clearance.jpg'},
    {key: 'packing', title:'Packing & Warehouse', description:' CLN Logistics has a full capability in handling shipment for customer from A to Z with the full correspondence of back up, feedback and responsibility. We have done successful for customersʼ shipments with difference commodities and in a difference time with professing un-stuff as below pictures attached herewith.', image:'assets/image/warehouse.jpg'},
    {key: 'iec', title:'IEC', description:' CLN Logistics has a full capability in handling shipment for customer from A to Z with the full correspondence of back up, feedback and responsibility. We have done successful for customersʼ shipments with difference commodities and in a difference time with professing un-stuff as below pictures attached herewith.', image:'assets/image/international express.jpg'},
    {key: 'consolidation', title:'Consolidation', description:' CLN Logistics has a full capability in handling shipment for customer from A to Z with the full correspondence of back up, feedback and responsibility. We have done successful for customersʼ shipments with difference commodities and in a difference time with professing un-stuff as below pictures attached herewith.', image:'assets/image/consolidation.jpg'},
    {key: 'door2door', title:'Door To Door Service', description:' CLN Logistics has a full capability in handling shipment for customer from A to Z with the full correspondence of back up, feedback and responsibility. We have done successful for customersʼ shipments with difference commodities and in a difference time with professing un-stuff as below pictures attached herewith.', image:'assets/image/door_to_door.jpg'}
  ]

  activeTab:string = 'land';

  constructor(private route: ActivatedRoute, private router:Router){}

  ngOnInit() {
    // 🔹 Watch query params
    this.route.queryParams.subscribe(params => {
      if (params['tab']) {
        this.activeTab = params['tab'];
      }
    });
  }

  selectTab(tabKey: string){
    this.activeTab = tabKey;
    // Update query param without reloading
    this.router.navigate([], {
      relativeTo:this.route,
      queryParams: {tab:tabKey},
      queryParamsHandling: 'merge'
    });
  }
}
