import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeScreenComponent,
        children: [{ path: 'map', component: MapComponent }],
      },
      { path: 'about', component: AboutScreenComponent },
      { path: 'signup', component: SignUpComponent },
    ]),
    BrowserAnimationsModule,
    AngularMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
