import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';

import { MapService } from 'src/app/services/map.service';
import { TravelPlanService } from 'src/app/services/travel-plan.service';
import { BottomSheetComponent } from '../bottom-sheet/bottom-sheet.component';
import { MapComponent } from '../map/map.component';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit {

  @ViewChild(MapComponent) mapComp: MapComponent;

  constructor(private mapService: MapService, 
    private travelService: TravelPlanService,
    private _bottomSheet: MatBottomSheet,
    private _bottomSheetRef: MatBottomSheetRef<BottomSheetComponent>) { }

  ngOnInit(): void {
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
    this.mapComp.getRoute("", this.destination);

    // post user data to travel_table
    let travel_data = {
      'isDriving': this.searchForm.get("isDriving")?.value,
      'source': "",
      'destination': this.destination.lon+","+this.destination.lat
    }
    this.travelService.sendUserTravelPlan(travel_data)?.subscribe((res)=>{
      console.log(res);
      
      // get recommended companion
      if(this.searchForm.get("isDriving")?.value==false) {
        this.travelService.getDriver()?.subscribe((res)=>{
          console.log(res);
          this._bottomSheet.open(BottomSheetComponent, { data: res });
        });
        
      }
      else if(this.searchForm.get("isDriving")?.value==true) {
        this.travelService.getPassenger()?.subscribe((res)=>{
          console.log(res);
          this._bottomSheet.open(BottomSheetComponent, { data: res });
        });
        
      }

    });

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
