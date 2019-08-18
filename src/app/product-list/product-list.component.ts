import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
  // styles: [`mark{font-size: 2rem;} h3{font-size: 3rem;}`]
})
export class ProductListComponent {
  products = products;

  share() {
    window.alert('The product has been shared!');
  }

  // Data binding one
  // canAddItem = false;

  // constructor () {
  //   setTimeout(() => {
  //     this.canAddItem = true;
  //   }, 3000)
  // }

  // Data Binding second
  addItemStatus = "";
  constructor(){};

  addItem(){
    this.addItemStatus = "All added! "
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/