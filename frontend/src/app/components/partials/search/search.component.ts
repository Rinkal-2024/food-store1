import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/shared/models/Order';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  searchTerm = '' ;
  order:Order = new Order();
  checkoutForm!: FormGroup;
  constructor(activatedRoute : ActivatedRoute , private router :Router , private orderService : OrderService){
    activatedRoute.params.subscribe((params)=>{
      if(params.searchTerm)this.searchTerm = params.searchTerm;
    })
  }
  ngOnInit(): void {
    
  }

  

  search(term:string):void{
    if(term)
    this.router.navigateByUrl('/search/'+ term);
  }

}
