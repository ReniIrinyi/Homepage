import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/model/Products';
import { DataService } from 'src/app/service/DataService';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor(private dataService: DataService) {}

  products: Products[] = [];

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.dataService.getProjects().subscribe(
      (data) => {
        this.products = data;
      },
      (error) => {
        console.log('error while fetching data', error);
      }
    );
  }
}
