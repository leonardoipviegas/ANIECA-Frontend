import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-disp-esp-a',
  templateUrl: './spec-prov-a.component.html',
  styleUrls: ['./spec-prov-a.component.css']
})
export class DispEspAComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  backClicked() {
    this.location.back();
  }

}
