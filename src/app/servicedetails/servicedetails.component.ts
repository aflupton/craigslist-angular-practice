import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Service } from '../service.model';
import { ServiceService } from '../service.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-servicedetails',
  templateUrl: './servicedetails.component.html',
  styleUrls: ['./servicedetails.component.css'],
  providers: [ServiceService]
})
export class ServiceDetailsComponent implements OnInit {
  serviceId: string;
  serviceToDisplay: Service;

  constructor (
    private route: ActivatedRoute,
    private location: Location,
    private serviceService: ServiceService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParametersArray) => {
      this.serviceId = urlParametersArray['id'];
    });
    this.serviceService.getServiceById(this.serviceId).subscribe(dataLastEmittedFromObserver => {
      this.serviceToDisplay = new Service(dataLastEmittedFromObserver.name, dataLastEmittedFromObserver.location, dataLastEmittedFromObserver.price, dataLastEmittedFromObserver.date);
      console.log(this.serviceToDisplay);
    });

  }
}
