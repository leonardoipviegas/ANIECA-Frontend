import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-mods-teor-prat-c-d',
  templateUrl: './prat-theo-mods-c-d.component.html',
  styleUrls: ['./prat-theo-mods-c-d.component.css']
})
export class ModsTeorPratCDComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  backClicked() {
    this.location.back();
  }

}
