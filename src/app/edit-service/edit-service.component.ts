import { Component, Input, OnInit } from '@angular/core';
import { Service } from '../service.model';

@Component({
  selector: 'app-edit-service',
  templateUrl: './edit-service.component.html',
  styleUrls: ['./edit-service.component.css']
})
export class EditServiceComponent implements OnInit {
  @Input() selectedService;
  constructor() { }

  ngOnInit() {
  }

}
