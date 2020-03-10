import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-disp-com-c-d',
  templateUrl: './com-prov-c-d.component.html',
  styleUrls: ['./com-prov-c-d.component.css']
})
export class DispComCDComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  backClicked() {
    this.location.back();
  }

}
