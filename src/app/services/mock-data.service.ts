import { Injectable } from '@angular/core';
import mockStocksInfo from '../mock-data/data.json';
@Injectable({
  providedIn: 'root'
})
export class MockDataService {

  stocksInfo: any;

  constructor() { 
    this.stocksInfo = mockStocksInfo;
  }

  getStocksData() {
    return this.stocksInfo;
  }
}
