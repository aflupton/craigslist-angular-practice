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
    return this.database.object('/services/' + serviceId);
  }

  updateService(localUpdatedService) {
    var serviceEntryInFirebase = this.getServiceById(localUpdatedService.$key);
    serviceEntryInFirebase.update({name: localUpdatedService.name, location: localUpdatedService.location, price: localUpdatedService.price, date: localUpdatedService.date});
  }

  deleteService(localServiceToDelete) {
    var serviceEntryInFirebase = this.getServiceById(localServiceToDelete.$key);
    serviceEntryInFirebase.remove();
  }
}
