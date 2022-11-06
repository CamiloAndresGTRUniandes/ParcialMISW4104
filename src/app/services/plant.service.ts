import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Plant } from '../models/plant';
const urlAPI= environment.baseUrl;
@Injectable({
  providedIn: 'root'
})
export class PlantService {

  constructor(private httpClient:HttpClient) { }
  getPlants()
  {
    return this.httpClient.get<Plant[]>(urlAPI);
  }
}
