import { Component } from '@angular/core';
import { EntityService } from './entity.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BusinessEntityForm';
  data: {};
  fields: {};

  constructor(private service: EntityService) {
    this.data = service.data;
    this.fields = service.fields;
  }

}
