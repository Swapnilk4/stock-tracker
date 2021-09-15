import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { MockDataService } from '../services/mock-data.service';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.scss']
})
export class StocksComponent implements OnInit {

  stocks: any;
  @Input() newStock: any;
  constructor(private mockDataService: MockDataService) { }

  ngOnInit() {
    this.stocks = this.mockDataService.getStocksData();

    // It will fetch the data for every 15 seconds and UI will get updated only for selected items
    setInterval(() => {
      this.mockDataService.stocksInfo = this.updateStockPriceAndDataPoints(this.stocks);
      this.stocks = this.mockDataService.getStocksData();
    }, 15000);
  }

  /* Function updates stock price randomly as we have integrated mock data 
     Only selected items will get updated on UI rest items will persist old state
     Also adds Datapoint on each call */
  updateStockPriceAndDataPoints(stocks) {
    stocks.forEach(stock => {
      if (stock.isSelected) {
        stock.dataPoints = stock.dataPoints.map(point => {

          point.l = this.getRandomIntInclusive(100, 600)

          return point;
        });
        // adds Datapoint on each call 
        stock.dataPoints.push({
          id: "694653",
          t: "GOOG",
          e: "NASDAQ",
          l: 413.84,
          l_cur: 413.84,
          s: 0,
          ltt: this.fetchCurrentTime(),
          lt: "Mar 01, 2021, 12:27:36 AM",
          c: "+0.11",
          cp: "0.02",
          ccol: "chg"
        });
      }
    });
    return stocks;
  }

  getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  get currentDate() {
    return new Date();
  }

  ngOnChanges(changes: SimpleChanges) {

    if (changes && changes.newStock.previousValue !== changes.newStock.currentValue) {
      setTimeout(() => {
        this.stocks.push(this.createStock());
      })
    }
  }

  createStock() {
    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })
    const stock = {
      stockName: this.newStock.stockName,
      dataPoints: [{
        id: "694653",
        t: "GOOG",
        e: "NASDAQ",
        l: this.newStock.price,
        l_cur: this.newStock.price,
        s: 0,
        ltt: this.fetchCurrentTime(),
        lt: "Mar 01, 2021, 12:27:36 AM",
        c: "+0.11",
        cp: "0.02",
        ccol: "chg"
      }]
    }
    return stock;
  }

  fetchCurrentTime() {
    return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
  }
}
