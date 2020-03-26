import { Component, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { AuthService } from "./../auth/auth.service";
import { TrafficSignsService } from "./traffic-signs.service";
import { BsModalService, BsModalRef } from "ngx-bootstrap";
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.css"]
})
export class ContentComponent implements OnInit {
  constructor(
    private trafficSignsService: TrafficSignsService,
    private modalService: BsModalService,
    private fb: FormBuilder
  ) {}
  title = "";
  data = {};
  modalRef: BsModalRef;
  editSignTypeForm: FormGroup;
  addSignTypeForm: FormGroup
  signTypes: any[] = []
  signs = [];
  signInformation = [];
  openContent = 0;
  signForm: FormGroup;
  signName: string;
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
    this.addSignTypeForm = this.fb.group({
      Name: [null, Validators.required],
      Text: [null],
      Placement_Text: [null],
      Placement_Image_Route: [null]
    })
    this.signForm = new FormGroup({
      Name: new FormControl(null),
      Text: new FormControl(null),
      Placement_Text: new FormControl(null)
    });
    this.getSignTypes()
  }
  
  addSignType(form) {
    console.log(form)
    this.trafficSignsService.postSignType(form).subscribe(res => {
      if (res) {
        console.log(res)
      }
      else {
        console.log('erro')
      }
    },
    error => console.log(error))
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
  
  getSignTypes() {
    this.trafficSignsService.getSignTypes().subscribe(res => {
      if (res) {
        console.log(res)
        this.signTypes = Object.values(res)
      }
      else {
        console.log('aqui')
      }
    })
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

  signF(data) {
    var SignFields = ["Name", "Text"];

    if (this.signInformation.length === 0) {
      data['Traffic_Signs_Type_idTraffic_Signs_Type'] = this.data["idTraffic_Signs_Type"]
      this.trafficSignsService.postSign(data, (error) => {
        if (error) {
          return console.log(error)
        }
        this.getSigns(this.data["idTraffic_Signs_Type"]);
      });
    } else {
      SignFields.forEach(SignField => {
        if (this.signInformation[SignField] === data[SignField])
          delete data[SignField];
      });

      this.trafficSignsService.patchSign(
        this.signInformation["idTraffic_Signs"],
        data
      );
    }
  }

  addSign() {
    this.signInformation = [];
    this.signName = "Adicionar Sinal";
    this.signForm.reset();
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
      this.signForm.controls["Name"].setValue(this.signInformation["Name"]);
      this.signForm.controls["Text"].setValue(this.signInformation["Text"]);
      this.signName = this.signInformation["Name"];
      this.openModal(this.signInfo, "modal-md");
    });
  }

  deleteSign(idTraffic_Signs: number) {
    this.trafficSignsService.deleteTrafficSign(idTraffic_Signs, (error) => {
      if (error) {
        return console.log(error)
      }

      this.getSigns(this.data["idTraffic_Signs_Type"]);
    });
  }
}
