import { Component } from "@angular/core";
import { AuthService } from "./../auth/auth.service";
import { BsDropdownConfig } from "ngx-bootstrap";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
  providers: [
    {
      provide: BsDropdownConfig,
      useValue: { autoClose: true }
    }
  ]
})
export class HeaderComponent {
  constructor(private authService: AuthService) {}
}
