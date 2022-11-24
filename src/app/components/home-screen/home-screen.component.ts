import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
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

  destinationSearch: any;

  public route(){
    this.mapComp.getRoute();
  }

  public searchTo(query: string){
    this.mapService.searchLoc(query).subscribe((res)=>{
      this.destinationSearch = res;
      console.log(this.destinationSearch);
    });
    
  }

}
