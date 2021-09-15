import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.scss']
})
export class CreateStockComponent implements OnInit {


  @Output() addStockEvent: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  onSubmit(contactForm) {
    // console.log("##", contactForm);
    
    this.addStockEvent.emit({
      stockName: contactForm.form.value.stockName,
      price: contactForm.form.value.price
    });
  }
}
