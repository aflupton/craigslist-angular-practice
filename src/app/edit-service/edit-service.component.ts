import { Component, Input, OnInit } from '@angular/core';
// import { Service } from '../service.model';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-edit-service',
  templateUrl: './edit-service.component.html',
  styleUrls: ['./edit-service.component.css'],
  providers: [ServiceService]
})

export class EditServiceComponent implements OnInit {
  @Input() selectedService;

  constructor(private serviceService: ServiceService) { }

  ngOnInit() {
  }

  beginUpdatingService(serviceToUpdate) {
    this.serviceService.updateService(serviceToUpdate);
  }

  beginDeletingService(serviceToDelete) {
    this.serviceService.deleteService(serviceToDelete);
  }
}
