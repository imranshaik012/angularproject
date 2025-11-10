import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { ProductServiceService } from '../../product-service.service';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  constructor(private productService: ProductServiceService) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.productService.addProduct(form.value).subscribe({
        next: (res) => {
          console.log('Product added:', res);
          form.reset();
        },
        error: (err) => console.error('Error adding product:', err)
      });
    }
  }
}
