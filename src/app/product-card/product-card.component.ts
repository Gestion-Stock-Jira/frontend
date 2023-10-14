import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog' ;
import { DeleteComponent } from '../delete/delete.component';
import { UpdateComponent } from '../update/update.component';



@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})



export class ProductCardComponent {

  @Input() product: any; // Input property to receive product data from parent component

  constructor(private dialog: MatDialog) {}


  deleteProduct() {
      // Implement delete logic here
      const dialogRef = this.dialog.open(DeleteComponent, {
        data: { productName: this.product.name }
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          // Implement delete logic here
          console.log('Product deleted!');
        }
      });
   }

  modifyProduct() {
      // Implement modify logic here
      console.log('Product modified!');
      // Implement delete logic here
      const dialogRef = this.dialog.open(UpdateComponent, {
        data: { productName: this.product.name }
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          // Implement delete logic here
          console.log('Product deleted!');
        }
      });
  }

}
