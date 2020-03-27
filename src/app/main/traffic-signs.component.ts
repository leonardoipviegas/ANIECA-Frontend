import { Component, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { TrafficSignsService } from "./traffic-signs.service";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";

@Component({
  selector: "app-traffic-signs",
  templateUrl: "./traffic-signs.component.html",
  styleUrls: ["./traffic-signs.component.css"]
})
export class TrafficSignsComponent implements OnInit {
  constructor(
    private trafficSignsService: TrafficSignsService,
    private modalService: BsModalService
  ) {}
  showExamples = false;
  exNum = 0;
  activeDiagram = true;
  typeTitle = "";
  typeDescription = "";
  typePlacementText = "";
  typePlacementTextActive = false;
  typePlacementImageRoute = "";
  typeId = 0;
  signsImage = [];
  pageNumber = 0;
  modalRef: BsModalRef | null;
  @ViewChild("sign", { static: false }) signModal: any;
  signInformation = {};

  ngOnInit() {
    this.trafficSignsService.activeDiagram.subscribe(value => {
      if (value) {
        this.activeDiagram = true;
      } else {
        this.activeDiagram = false;
      }
    });
    this.trafficSignsService.signalType.subscribe(signalType => {
      this.typeId = signalType["idTraffic_Signs_Type"];
      this.typeTitle = signalType["Name"];
      this.typeDescription = signalType["Text"];
      this.typePlacementText = signalType["Placement_Text"];
      this.typePlacementImageRoute = signalType["Placement_Image_Route"];
    });
  }

  getSignsImage() {
    this.trafficSignsService.getSignsImage(this.typeId, (err, res) => {
      if (err) {
        return console.log(err);
      }
      this.signsImage = res;
    });
  }

  goToDiagram() {
    this.trafficSignsService.activeDiagram.next(true);
  }

  changePage() {
    if (this.pageNumber === 0) {
      this.pageNumber = 1;
    } else if (this.pageNumber === 1) {
      this.pageNumber = 0;
    }
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: "modal-lg" });
  }

  getSign(idTraffic_Signs: number) {
    this.exNum = 0;
    this.showExamples = false;
    this.trafficSignsService.getSign(idTraffic_Signs, (err, res) => {
      if (err) {
        return console.log(err);
      }
      this.signInformation = res[0];
      this.openModal(this.signModal);
    });
  }
  changeExample(direction: number) {
    if (direction === -1) {
      if (this.exNum === 0) {
        this.exNum = this.signInformation['Examples'].length - 1
      } else {
        this.exNum -= 1
      }
    } else if (direction === 1) {
      if (this.exNum === this.signInformation['Examples'].length - 1) {
        this.exNum = 0
      } else {
        this.exNum += 1
      }
    }
  }
}
