import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-mods-teor-prat-a-b',
  templateUrl: './prat-theo-mods-a-b.component.html',
  styleUrls: ['./prat-theo-mods-a-b.component.css']
})
export class ModsTeorPratABComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  backClicked() {
    this.location.back();
  }

}
