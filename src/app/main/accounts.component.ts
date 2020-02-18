import { Component, OnInit, TemplateRef } from "@angular/core";
import { AccountsService } from "./accounts.service";
import { BsModalRef, BsModalService } from "ngx-bootstrap";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from "../auth/auth.service";
import * as jwt_decode from "jwt-decode";

@Component({
  selector: "app-accounts",
  templateUrl: "./accounts.component.html",
  styleUrls: ["./accounts.component.css"]
})
export class AccountsComponent implements OnInit {
  page: Array<number> = [1, 1, 1];
  pageSize: Array<number> = [5, 5, 5];
  collectionSize: Array<number> = [0, 0, 0];
  ADMINS = [];
  SCHOOLS = [];
  PEOPLE = [];
  disableDelete = false;
  modalRef: BsModalRef;
  personalForm: FormGroup;
  schoolForm: FormGroup;
  adminForm: FormGroup;
  submitted: boolean;

  constructor(
    private authService: AuthService,
    private accountsService: AccountsService,
    private modalService: BsModalService
  ) {}

  cleanForms() {
    this.personalForm.patchValue({ Password: null });
    this.schoolForm.patchValue({ Password: null });
    this.adminForm.patchValue({ Password: null });
  }

  onCreate(form: FormGroup, entity: number) {
    if (form.invalid) {
      this.submitted = true;
      this.cleanForms();
      return;
    }

    this.authService.createAccount(form.value, entity, results => {
      if (results) {
        this.modalRef.hide();
        this.ngOnInit();
      }
    });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {
      ignoreBackdropClick: true
    });
  }

  ngOnInit() {
    this.accountsService.getAccounts((err, res) => {
      if (err) {
        console.log(err);
      } else {
        this.PEOPLE = res[0];
        this.collectionSize[0] = this.PEOPLE.length;

        this.SCHOOLS = res[1];
        this.collectionSize[1] = this.SCHOOLS.length;

        this.ADMINS = res[2];
        this.collectionSize[2] = this.ADMINS.length;

        if (this.collectionSize[2] === 1) this.disableDelete = true;
        else this.disableDelete = false;
      }
    });
    this.personalForm = new FormGroup({
      Email: new FormControl(null, [Validators.email, Validators.required]),
      Password: new FormControl(null, [
        Validators.required,
        Validators.minLength(5)
      ])
    });
    this.schoolForm = new FormGroup({
      Permit: new FormControl(null, [
        Validators.pattern("^[0-9]*$"),
        Validators.required
      ]),
      Password: new FormControl(null, [
        Validators.required,
        Validators.minLength(5)
      ])
    });
    this.adminForm = new FormGroup({
      Email: new FormControl(null, [Validators.email, Validators.required]),
      Password: new FormControl(null, [
        Validators.required,
        Validators.minLength(5)
      ])
    });
  }

  get admins() {
    return this.ADMINS.map((admin, i) => ({ id: i + 1, ...admin })).slice(
      (this.page[2] - 1) * this.pageSize[2],
      (this.page[2] - 1) * this.pageSize[2] + this.pageSize[2]
    );
  }

  get schools() {
    return this.SCHOOLS.map((school, i) => ({ id: i + 1, ...school })).slice(
      (this.page[1] - 1) * this.pageSize[1],
      (this.page[1] - 1) * this.pageSize[1] + this.pageSize[1]
    );
  }

  get people() {
    return this.PEOPLE.map((people, i) => ({ id: i + 1, ...people })).slice(
      (this.page[0] - 1) * this.pageSize[0],
      (this.page[0] - 1) * this.pageSize[0] + this.pageSize[0]
    );
  }

  deleteAccount(id: number) {
    this.accountsService.deleteAccount(id, (err, res) => {
      if (err) {
        return console.log(err);
      }

      if (jwt_decode(this.authService.getToken())._id === id) {
        this.authService.logout();
      } else {
        this.ngOnInit();
      }
    });
  }
}
