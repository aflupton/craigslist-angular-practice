import { Injectable } from '@angular/core';
import { Service } from './service.model';
import { SERVICES } from './mock-services';

@Injectable()
export class ServiceService {

  constructor() { }

  getServices() {
    return SERVICES;
  }

  getServiceById(serviceId: number){
    for (var i = 0; i <= SERVICES.length - 1; i++) {
      if (SERVICES[i].id === serviceId) {
        return SERVICES[i];
      }
    }
  }
}
