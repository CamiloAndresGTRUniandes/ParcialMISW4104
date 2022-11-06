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
  public interior : number = 0;
  public exterior : number = 0;
  constructor(private plantService:PlantService) { }

  ngOnInit(): void {
   this.getPlants();
  }

  getPlants()
  {
    this.plantService.getPlants().subscribe(pl => {

      this.plants = pl;
      this.interior = pl.filter(x => x.tipo === "Interior").length;
      this.exterior = pl.filter(x => x.tipo === "Exterior").length;
      
    })
  }

}
