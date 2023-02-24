import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import {NgxLeafletLocateModule} from '@runette/ngx-leaflet-locate'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './models/angular-material/angular-material.module';
import { HomeScreenComponent } from './components/home-screen/home-screen.component';
import { AboutScreenComponent } from './components/about-screen/about-screen.component';
import { MapComponent } from './components/map/map.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

import { LoadingInterceptor } from './interceptor/loading.interceptor'; 

@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent,
    AboutScreenComponent,
    MapComponent,
    SignUpComponent,
    NotFoundComponent,
    SignInComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    NgxLeafletLocateModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeScreenComponent,
        children: [{ path: 'map', component: MapComponent }],
      },
      { path: 'about', component: AboutScreenComponent },
      { path: '**', component: NotFoundComponent },
    ]),
    BrowserAnimationsModule,
    AngularMaterialModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [SignInComponent, SignUpComponent],
})
export class AppModule {}
