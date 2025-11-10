import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  private readonly url = 'api/products';

  constructor(private http: HttpClient) { }


getProductL():Observable<any>{
  return this.http.get<any>(this.url);
}
addP(product:any):Observable<any>{
  return this.http.post<any>(this.url, product)
}
  getProducts(): Observable<any>{
    return this.http.get<any>(this.url);
  }

  addProduct(product: any): Observable<any> {
    return this.http.post<any>(this.url, product);
  }
  updateProduct(id: number, product: any): Observable<any> {
    return this.http.put<any>(`${this.url}/${id}`, product);
  }
  deleteProduct(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/${id}`);
  }
  getProductById(id: number): Observable<any> {
    return this.http.get<any>(`${this.url}/${id}`);
  }
  getProductsByCategory(category: string): Observable<any> {
    return this.http.get<any>(`${this.url}/category/${category}`);
  }
  getProductsByPriceRange(min: number, max: number): Observable<any> {
    return this.http.get<any>(`${this.url}/price?min=${min}&max=${max}`);
  }
  getProductsBySearch(query: string): Observable<any> {
    return this.http.get<any>(`${this.url}/search?q=${query}`);
  }
  getProductsByBrand(brand: string): Observable<any> {
    return this.http.get<any>(`${this.url}/brand/${brand}`);
  }
  getProductsByRating(rating: number): Observable<any> {
    return this.http.get<any>(`${this.url}/rating/${rating}`);
  }
  getProductsByStock(stock: number): Observable<any> {
    return this.http.get<any>(`${this.url}/stock/${stock}`);
  }
}
