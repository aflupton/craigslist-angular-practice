import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Service } from '../service.model';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-servicedetails',
  templateUrl: './servicedetails.component.html',
  styleUrls: ['./servicedetails.component.css'],
  providers: [ServiceService]
})
export class ServiceDetailsComponent implements OnInit {
  serviceId: number = null;
  serviceToDisplay: Service;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private serviceService: ServiceService
  ) { }

  ngOnInit() {
    console.log(this.route);
    this.route.params.forEach((urlParameters) => {
      this.serviceId = parseInt(urlParameters['id']);
    });
    this.serviceToDisplay = this.serviceService.getServiceById(this.serviceId);
  }

}
