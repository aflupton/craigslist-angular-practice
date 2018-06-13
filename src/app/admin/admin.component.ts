import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Service } from '../service.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ServiceService]
})
export class AdminComponent implements OnInit {

  constructor(private serviceService: ServiceService) { }

  ngOnInit() {
  }

  submitForm(name: string, location: string, price: number, date: string) {
    var newService: Service = new Service(name, location, price, date);
    this.serviceService.addService(newService);
  }
}
