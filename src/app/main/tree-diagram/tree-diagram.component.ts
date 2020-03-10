import { Component, OnInit } from "@angular/core";
import { TrafficSignsService } from './../traffic-signs.service';

@Component({
  selector: "app-tree-diagram",
  templateUrl: "./tree-diagram.component.html",
  styleUrls: ["./tree-diagram.component.css"]
})
export class TreeDiagramComponent implements OnInit {
  collapsed = [
    {
      self: false,
      children: [
        { 
          self: false,
          children: []
        },
        { 
          self: false,
          children: []
        },
        { 
          self: false,
          children: []
        },
        { 
          self: false,
          children: []
        },
        { 
          self: false,
          children: []
        },
        { 
          self: false,
          children: []
        },
        { 
          self: false,
          children: []
        }
      ]
    },
    {
      self: false,
      children: []
    },
    {
      self: false,
      children: []
    },
    {
      self: false,
      children: []
    },
    {
      self: false,
      children: [
        { 
          self: false,
          children: []
        },
        { 
          self: false,
          children: []
        },
        { 
          self: false,
          children: [
            { 
              self: false,
              children: []
            },
            { 
              self: false,
              children: []
            },
            { 
              self: false,
              children: []
            },
            { 
              self: false,
              children: [
                { 
                  self: false,
                  children: []
                },
                { 
                  self: false,
                  children: []
                },
                { 
                  self: false,
                  children: []
                }
              ]
            }
          ]
        },
        { 
          self: false,
          children: []
        },
        { 
          self: false,
          children: []
        }
      ]
    },
    {
      self: false,
      children: []
    },
    {
      self: false,
      children: []
    }
  ]
  constructor(private trafficSignsService: TrafficSignsService) {}

  ngOnInit() {}

  goTo(signalId: number) {
    this.trafficSignsService.goToSignType(signalId);
  }
}
