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

  addService(newService: Service) {
    this.services.push(newService);
  }

  getServiceById(serviceId: string){
    return this.database.object('services/' + serviceId);
  }
}
