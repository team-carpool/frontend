import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import { HomeScreenComponent } from './components/home-screen/home-screen.component';
import { AboutScreenComponent } from './components/about-screen/about-screen.component';
import { MapComponent } from './components/map/map.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent,
    AboutScreenComponent,
    MapComponent,
    SignUpComponent,
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
      { path: 'sign-up', component: SignUpComponent },
    ]),
    BrowserAnimationsModule,
    AngularMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
