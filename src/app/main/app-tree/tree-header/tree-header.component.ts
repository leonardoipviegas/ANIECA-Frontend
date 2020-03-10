import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-tree-header',
  templateUrl: './tree-header.component.html',
  styleUrls: ['./tree-header.component.css']
})
export class TreeHeaderComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  backClicked() {
    this.location.back();
  }

}
