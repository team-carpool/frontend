import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'

import { MapService } from 'src/app/services/map.service';
import { MapComponent } from '../map/map.component';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit, AfterViewInit {

  @ViewChild(MapComponent) mapComp: MapComponent;

  constructor(private mapService: MapService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
      
  }

  searchForm = new FormGroup({
    source: new FormControl(''),
    time: new FormControl(''),
    isDriving: new FormControl('')
  });

  destinationSearchList: any;
  destination: any;

  public route(){
    this.mapComp.getRoute(this.destination);
  }

  public searchTo(query: string){
    this.mapService.searchLoc(query).subscribe((res)=>{
      this.destinationSearchList = res;
      console.log(this.destinationSearchList);
    });
    
  }

  public destinationSelected(lat: string, lon: string){
    this.destination = {"lat":lat, "lon":lon};
  }

}
