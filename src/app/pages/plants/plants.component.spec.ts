import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { PlantsComponent } from './plants.component';

import { Plant } from '../../models/plant';
import { faker } from '@faker-js/faker';
import { PlantService } from '../../services/plant.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {  of } from 'rxjs';

let httpClientSpy: jasmine.SpyObj<HttpClient>;
let servicio: PlantService;

let n = 3;
  function datos() {
    let plants: Plant[] = [];
    let types = ['Interior','Exterior'];
    for (let i = 0; i < n; i++) {
      let plant = {} as Plant;
      plant.id = faker.datatype.number();
      plant.nombre_comun = faker.name.fullName();
      plant.tipo = types[faker.datatype.number({'min': 0,'max': 1})];
      plant.altura_maxima = faker.datatype.number();
      plant.clima = faker.name.gender();
      plant.sustrato_siembra = faker.name.gender();
      plants.push(plant);
    }
    return plants;
  }

describe('PlantsComponent', () => {
  let component: PlantsComponent;
  let fixture: ComponentFixture<PlantsComponent>;

  beforeEach(async () => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    servicio= new PlantService(httpClientSpy);
    spyOn(servicio,'getPlants' )
    .and.callFake( () => {
      return of(plants);
    });
    
    await TestBed.configureTestingModule({
      imports: [ 
        HttpClientModule],
        declarations: [ PlantsComponent ],
        schemas: [ NO_ERRORS_SCHEMA ],
        providers:[PlantService]
      })
      .compileComponents();
      let plants = datos();
      fixture = TestBed.createComponent(PlantsComponent);
      component = fixture.componentInstance;
      component.plants= datos();
      fixture.detectChanges();
  });

  it('should create Plants Component', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('Get Plants data from service', () => {
    const app = fixture.componentInstance;
    app.plantService= servicio;
    app.plantService.getPlants();
    fixture.detectChanges();
    expect(app.plants.length).toBe(n);
  });

  it('Table is rendered with '+(n+1)+' tr ', () => {
 
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('tr')?.length).toBe(n+1);

  });

});
