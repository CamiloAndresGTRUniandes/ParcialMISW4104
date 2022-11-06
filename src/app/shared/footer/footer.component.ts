import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
public telephone: string = "+57 3102105253";
public email: string = "info@viveroelotonio.com";
public instagram: string = "@viveroelotonio";

  constructor() { }

  ngOnInit(): void {
  }

}
