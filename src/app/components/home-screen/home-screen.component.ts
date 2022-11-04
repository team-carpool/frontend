import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MapComponent } from '../map/map.component';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit, AfterViewInit {

  @ViewChild(MapComponent) mapComp: MapComponent;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
      
  }

  public route(){
    this.mapComp.getRoute();
  }

}
