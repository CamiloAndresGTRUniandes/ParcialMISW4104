import { Component, OnInit } from '@angular/core';
import { Plant } from 'src/app/models/plant';
import { PlantService } from 'src/app/services/plant.service';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.css']
})
export class PlantsComponent implements OnInit {
  public plants: Plant[] = [];
  constructor(private plantService:PlantService) { }

  ngOnInit(): void {
   this.getPlants();
  }

  getPlants()
  {
    this.plantService.getPlants().subscribe(pl => {

      this.plants = pl;
    })
  }

}
