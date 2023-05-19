import { Component, OnInit, Inject } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { MapComponent } from '../map/map.component';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.css']
})
export class BottomSheetComponent implements OnInit {

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;


  constructor(private _formBuilder: FormBuilder, @Inject(MAT_BOTTOM_SHEET_DATA) public data: any) { }

  ngOnInit(): void {
    console.log(this.data);
  }

  addRoute(src:string, des:string) {
    this.mapComp.getCompanionRoute(src, des);
  }

  removeRoute(){
    this.mapComp.removeCompanionRoute();
  }

  

}
