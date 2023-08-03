import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/DataService';
import { Service } from 'src/app/model/Service';

import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faList } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  constructor(private dataService: DataService) {}

  faCode = faCode;
  faPen = faPen;
  faList = faList;

  icons = [faPen, faCode, faList];

  services: Service[] = [];

  ngOnInit(): void {
    this.fetchData();
  }
  private fetchData() {
    this.dataService.getServices().subscribe(
      (data) => {
        this.services = data;
      },
      (error) => {
        console.log('error while fetching data', error);
      }
    );
  }
}
