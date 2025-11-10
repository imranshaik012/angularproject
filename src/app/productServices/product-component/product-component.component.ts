import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductServiceService } from '../../product-service.service';
import { AddProductComponent } from '../add-product/add-product.component';
@Component({
  selector: 'app-product-component',
  standalone: true,
  imports: [CommonModule, AddProductComponent],
  templateUrl: './product-component.component.html',
  styleUrl: './product-component.component.css'
})
export class ProductComponentComponent implements OnInit {
  data: any;
  showAddProduct = false;
  showAddpro = false;
  constructor(private productService: ProductServiceService) {}

  ngOnInit(): void {
   this.getProductList();
  }


  // getProductList():void{
  //   this.productService.getProducts().subscribe(res => {
  //     console.log('Full response:', res);
  //     const filtered = res.filter(
  //       (p: any) => p.category === 'groceries' && p.price > 1
  //     );
  //     this.data = filtered;
  //   });
  //   }
  getProductList():void{
    this.productService.getProducts().subscribe(res =>{
      console.log('full response', res);
      const fileteredData = res.filter((p:any)=>{
        p.category === 'groceries' && p.price > 2;
      })
    })
  }
}
