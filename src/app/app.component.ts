import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'stock-tracker-demo';
  isAddStockClicked = false;
  newStock: any;
  
  addNewStock(stock) {
    this.isAddStockClicked =false;
    this.newStock = stock; 
  }
}
