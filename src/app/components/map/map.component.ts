import { Component, AfterViewInit  } from '@angular/core';

import * as L from 'leaflet';
import { latLng, Map, Control, LocationEvent } from 'leaflet';
import 'leaflet-routing-machine';

import { MapService } from 'src/app/services/map.service';
import { TravelPlanService } from 'src/app/services/travel-plan.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit  {

  constructor(private travelService: TravelPlanService, private mapService: MapService) { }

  ngAfterViewInit (): void {
    // console.log(this.mapService.getIpLoc());
    this.initMap();
  }

  public map:Map;

  public locateOptions:  Control.LocateOptions = {
    flyTo: true,
    // keepCurrentZoomLevel: true,
    locateOptions: {
                 enableHighAccuracy: true,
               },
    icon: 'leaflet-control-locate-location-arrow',
    clickBehavior: {inView: 'stop',
                    outOfView: 'setView',
                    inViewNotFollowing: 'setView'}
  };

  private currentUserCoord = "";

  private initMap(): void {
    this.map = L.map('map', {
      center: [ 25.6370210, 85.9089743 ],
      zoom: 13
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }

  onNewLocation(e: LocationEvent){
    // console.log(e.latlng);
    var lat = new String(e.latlng.lat);
    var lng = new String(e.latlng.lng);
    var coord = this.buildCoord(lat, lng);

    if(!(coord===this.currentUserCoord)){
      this.currentUserCoord = coord;
      this.travelService.updateCurrentUserLoc(coord);
    }
  }

  private buildCoord(lat: any, lng: any): string{
    return lat+","+lng;
  }

  public getRoute(destination: any){
    var source = this.currentUserCoord.split(",");
    if(source.length<2){
      alert("Please turn on GPS");
      return;
    }

    L.Routing.control({
      router: L.Routing.osrmv1({
          serviceUrl: `https://router.project-osrm.org/route/v1/`
      }),
      showAlternatives: true,
      // lineOptions: {extendToWaypoints: false, missingRouteTolerance: 0, styles: [{color: '#242c81', weight: 7}]},
      fitSelectedRoutes: true,
      // altLineOptions: {extendToWaypoints: false, missingRouteTolerance: 0, styles: [{color: '#ed6852', weight: 7}]},
      // show: false,
      routeWhileDragging: true,
      waypoints: [
          L.latLng(Number(source[0]), Number(source[1])),
          L.latLng(Number(destination.lat), Number(destination.lon))
      ]
    }).addTo(this.map);
  }

}
