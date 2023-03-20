import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'

import { MapService } from 'src/app/services/map.service';
import { TravelPlanService } from 'src/app/services/travel-plan.service';
import { MapComponent } from '../map/map.component';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit, AfterViewInit {

  @ViewChild(MapComponent) mapComp: MapComponent;

  constructor(private mapService: MapService, private travelService: TravelPlanService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
      
  }

  searchForm = new FormGroup({
    source: new FormControl(''),
    time: new FormControl(''),
    isDriving: new FormControl(false)
  });

  destinationSearchList: any;
  destination: any;

  public route(){
    // draw user route
    this.mapComp.getRoute(this.destination);

    // post user data to travel_table
    let travel_data = {
      'isDriving': this.searchForm.get("isDriving")?.value,
      'source': "",
      'destination': this.destination.lat+","+this.destination.lon
    }
    this.travelService.sendUserTravelPlan(travel_data);

    // get recommended co-passenger
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
