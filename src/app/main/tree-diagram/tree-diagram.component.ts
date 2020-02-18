import { Component, OnInit } from "@angular/core";

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
  
  ngOnInit() {}
}
