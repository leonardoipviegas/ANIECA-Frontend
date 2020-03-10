import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-seg-rod-a-b',
  templateUrl: './rod-saf-a-b.component.html',
  styleUrls: ['./rod-saf-a-b.component.css']
})
export class SegRodABComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  backClicked() {
    this.location.back();
  }

}
