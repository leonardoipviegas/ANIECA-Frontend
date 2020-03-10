import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-seg-rod-c-d',
  templateUrl: './rod-saf-c-d.component.html',
  styleUrls: ['./rod-saf-c-d.component.css']
})
export class SegRodCDComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  backClicked() {
    this.location.back();
  }

}
