import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from '../service.model';
import { ServiceService } from '../service.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css'],
  providers: [ServiceService]
})
export class SectionsComponent implements OnInit {
  services: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private serviceService: ServiceService) { }

  ngOnInit () {
    this.services = this.serviceService.getServices();
  }
  goToDetailPage(clickedService) {
    this.router.navigate(['services', clickedService.$key]);
  };

}
