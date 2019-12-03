import { Component, OnInit } from '@angular/core';
import { productlist } from "./product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  products = productlist
}
