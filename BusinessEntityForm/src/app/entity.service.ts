import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import EntityData from '../assets/entityData.json';
import EntityMeta from '../assets/entityMeta.json';

@Injectable({
  providedIn: 'root'
})
export class EntityService {

  private entityData = {};
  private entityMeta = {};
  constructor(private http: HttpClient) { 
    this.entityData = EntityData;
    this.entityMeta = EntityMeta;
  }

  get fields () {
    return this.entityMeta;
  }

  get data() {
    return this.entityData;
  }
/*
  public populateFieldsWithData() {
    for (const dataKey in this.data) {
      this.fields["field"].forEach(element => {
        for (const metaKey in element) {
          if (element[metaKey] === dataKey)
        }
      });
    }
  }
  */
}
