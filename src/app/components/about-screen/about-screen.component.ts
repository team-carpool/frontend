import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-screen',
  templateUrl: './about-screen.component.html',
  styleUrls: ['./about-screen.component.css']
})
export class AboutScreenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
// // Script to open and close sidebar
//  w3_open() {
//   document.getElementById("mySidebar").style.display = "block";
//   document.getElementById("myOverlay").style.display = "block";
// }
 
// function w3_close() {
//   document.getElementById("mySidebar").style.display = "none";
//   document.getElementById("myOverlay").style.display = "none";
// }

// // Modal Image Gallery
// function onClick(element) {
//   document.getElementById("img01").src = element.src;
//   document.getElementById("modal01").style.display = "block";
//   var captionText = document.getElementById("caption");
//   captionText.innerHTML = element.alt;
// }

}
