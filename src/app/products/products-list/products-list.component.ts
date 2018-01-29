import { Component, OnInit } from '@angular/core';

import { ProductService } from '../product.service';

import { Product } from '../product-model';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {

 // notes: Observable<Product[]>;
 // content: string;

  

  ngOnInit() {
    // this.notes = this.noteService.getData()
   
  }

  

}
