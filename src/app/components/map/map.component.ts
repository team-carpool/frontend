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
  public routeData: Control;
  public companionRouteData:Control;

  private initMap(): void {
    this.map = L.map('map', {
      center: [ 22.5726, 88.3639 ],
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
    var coord = this.buildCoord(lng, lat);

    if(!(coord===this.currentUserCoord)){
      this.currentUserCoord = coord;
      this.travelService.updateCurrentUserLoc(coord);
    }
  }

  private buildCoord(lng: any, lat: any): string{
    return lng+","+lat;
  }

  public getRoute(sourceStr: string, destination: any){
    if(this.routeData!=undefined) {
      this.routeData.remove();
    }

    if(sourceStr==="") {
      var source = this.currentUserCoord.split(",");
    }
    else {
      var source = sourceStr.split(",");
    }
    if(source.length<2){
      alert("Please turn on GPS");
      return;
    }

    this.routeData = L.Routing.control({
      router: L.Routing.osrmv1({
          serviceUrl: `https://router.project-osrm.org/route/v1/`
      }),
      // showAlternatives: true,
      // lineOptions: {extendToWaypoints: false, missingRouteTolerance: 0, styles: [{color: '#242c81', weight: 7}]},
      fitSelectedRoutes: true,
      // altLineOptions: {extendToWaypoints: false, missingRouteTolerance: 0, styles: [{color: '#ed6852', weight: 7}]},
      // show: false,
      routeWhileDragging: true,
      waypoints: [
        L.latLng(Number(source[1]), Number(source[0])),
        L.latLng(Number(destination.lat), Number(destination.lon))
      ]
    });

    this.routeData.addTo(this.map);
  }

  public getCompanionRoute(sourceStr: string, destinationStr: string){
    if(this.companionRouteData!=undefined) {
      this.removeCompanionRoute();
    }

    var source = sourceStr.split(",");
    var destination = destinationStr.split(",");

    this.companionRouteData = L.Routing.control({
      router: L.Routing.osrmv1({
          serviceUrl: `https://router.project-osrm.org/route/v1/`
      }),
      // showAlternatives: true,
      lineOptions: {extendToWaypoints: false, missingRouteTolerance: 0, styles: [{color: '#5ec717', weight: 3}]},
      fitSelectedRoutes: true,
      // altLineOptions: {extendToWaypoints: false, missingRouteTolerance: 0, styles: [{color: '#ed6852', weight: 7}]},
      // show: false,
      routeWhileDragging: true,
      waypoints: [
        L.latLng(Number(source[1]), Number(source[0])),
        L.latLng(Number(destination[1]), Number(destination[0]))
      ]
    });
    console.log(this.map);
    this.companionRouteData.addTo(this.map);
  }

  public removeCompanionRoute() {
    this.companionRouteData.remove();
  }

}
