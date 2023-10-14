import { Component } from '@angular/core';
import { AddComponent } from './add/add.component';
import { MatDialog } from '@angular/material/dialog' ;
import { NgModule } from '@angular/core';
import { ProductCardComponent } from './product-card/product-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private dialog: MatDialog) {}

  title = 'FrontEnd_Agil';
  productData = [{
    name: 'Product 1',
    desc: 'this product is really good and cool kjdnkjd kjdn kjnd ',
    image: 'https://static.vecteezy.com/system/resources/previews/008/847/318/non_2x/isolated-black-t-shirt-front-free-png.png',
    price: 29.99,
    qte: 29
  },
  {
    name: 'Product 2',
    desc: 'this product is really good and cool kjdnkjd kjdn kjnd ',
    image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg',
    price: 49.99,
    qte: 7
  },
  {
    name: 'Product 3',
    desc: 'this product is really good and cool kjdnkjd kjdn kjnd ',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
    price: 19.99,
    qte: 16
  },
  {
    name: 'Product 4',
    desc: 'this product is really good and cool kjdnkjd kjdn kjnd ',
    image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg',
    price: 199,
    qte: 20
  },
  {
    name: 'Product 5',
    desc: 'this product is really good and cool kjdnkjd kjdn kjnd ',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
    price: 199,
    qte: 20
  },
  // Add more products as needed
];



//the pop up
AddProduct() {
  // Implement modify logic here
  console.log('Product Added!!');
  // Implement delete logic here
  const dialogRef = this.dialog.open(AddComponent);

  
}





}
