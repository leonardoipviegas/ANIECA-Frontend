import { Component, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { AuthService } from "./../auth/auth.service";
import { TrafficSignsService } from "./traffic-signs.service";
import { BsModalService, BsModalRef } from "ngx-bootstrap";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.css"]
})
export class ContentComponent implements OnInit {
  constructor(
    private trafficSignsService: TrafficSignsService,
    private modalService: BsModalService
  ) {}
  title = "";
  data = {};
  modalRef: BsModalRef;
  editSignTypeForm: FormGroup;
  signs = [];
  signInformation = [];
  @ViewChild("signInfo", { static: false }) signInfo: any;

  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    // this.form.patchValue({image: file});
    // this.form.get('image').updateValueAndValidity();
    // const reader = new FileReader();
    // reader.onload = () => {
    //   this.imagePreview = reader.result as string;
    // };
    // reader.readAsDataURL(file as Blob);
  }

  ngOnInit() {
    this.editSignTypeForm = new FormGroup({
      Name: new FormControl(null),
      Text: new FormControl(null),
      Placement_Text: new FormControl(null)
    });
  }

  getSignType(signId: number) {
    this.trafficSignsService.getSignType(signId, (err, res) => {
      if (err) {
        return console.log(err);
      }

      this.data = res;
      this.title = res.Name;
    });
  }

  openModal(template: TemplateRef<any>, size) {
    this.modalRef = this.modalService.show(template, { class: size });
  }

  editSignTypeF(data) {
    var SignTypeFields = ["Name", "Text", "Placement_Text"];

    SignTypeFields.forEach(signTypeField => {
      if (this.data[signTypeField] === data[signTypeField])
        delete data[signTypeField];
    });

    this.trafficSignsService.patchSignType(
      this.data["idTraffic_Signs_Type"],
      data
    );
    window.location.reload();
  }

  getSigns(idTraffic_Signs_Type: number) {
    this.trafficSignsService.getSignsImage(idTraffic_Signs_Type, (err, res) => {
      if (err) {
        return console.log(err);
      }
      this.signs = res;
    });
  }

  getSign(idTraffic_Signs: number) {
    this.trafficSignsService.getSign(idTraffic_Signs, (err, res) => {
      if (err) {
        return console.log(err);
      }
      this.signInformation = res[0];
      this.openModal(this.signInfo, "modal-md");
    });
  }

  deleteSign() {
    console.log('ok')
    this.trafficSignsService.deleteTrafficSign(
      this.signInformation["idTraffic_Signs"]
    );
    window.location.reload();
  }
}
