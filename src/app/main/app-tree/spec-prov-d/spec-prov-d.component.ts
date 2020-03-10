import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-disp-esp-d',
  templateUrl: './spec-prov-d.component.html',
  styleUrls: ['./spec-prov-d.component.css']
})
export class DispEspDComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  backClicked() {
    this.location.back();
  }

}
