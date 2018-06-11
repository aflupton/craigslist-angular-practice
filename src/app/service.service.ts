import { Injectable } from '@angular/core';
import { Service } from './service.model';
import { SERVICES } from './mock-services';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ServiceService {

  services: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
   this.services = database.list('services');
 }

  getServices() {
    return this.services;
  }

  getServiceById(serviceId: number){
    for (var i = 0; i <= SERVICES.length - 1; i++) {
      if (SERVICES[i].id === serviceId) {
        return SERVICES[i];
      }
    }
  }
}
