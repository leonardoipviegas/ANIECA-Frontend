import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-disp-esp-c',
  templateUrl: './spec-prov-c.component.html',
  styleUrls: ['./spec-prov-c.component.css']
})
export class DispEspCComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  backClicked() {
    this.location.back();
  }

}
