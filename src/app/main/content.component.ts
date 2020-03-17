import { Component, OnInit, TemplateRef } from "@angular/core";
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
      console.log(this.data);
      this.title = res.Name;
    });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  editSignTypeF(data) {
    var SignTypeFields = ["Name", "Text", "Placement_Text"];

    SignTypeFields.forEach(signTypeField => {
      if (this.data[signTypeField] === data[signTypeField])
        delete data[signTypeField];
    });
    
    this.trafficSignsService.patchSignType(this.data['idTraffic_Signs_Type'], data)
    window.location.reload();
  }
}
