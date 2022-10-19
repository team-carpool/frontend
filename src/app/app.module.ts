import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import { HomeScreenComponent } from './components/home-screen/home-screen.component';
import { AboutScreenComponent } from './components/about-screen/about-screen.component';
import { MapComponent } from './components/map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent,
    AboutScreenComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeScreenComponent,
        children: [{ path: 'map', component: MapComponent }],
      },
      { path: 'about', component: AboutScreenComponent },
    ]),
    BrowserAnimationsModule,
    AngularMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
