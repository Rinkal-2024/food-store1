import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/shared/models/Order';

@Component({
  selector: 'app-order-track-page',
  templateUrl: './order-track-page.component.html',
  styleUrls: ['./order-track-page.component.css']
})
export class OrderTrackPageComponent implements OnInit {

  order!:Order;
  constructor(activatedRoute: ActivatedRoute,orderService:OrderService) {
     const params = activatedRoute.snapshot.params;
     const OrderID = params.orderId;
     if(!OrderID) return;
  
     orderService.trackOrderById(OrderID).subscribe(res => {
      this.order = res;
     })   
  }
  ngOnInit(): void {
  }
}
