import { Component } from "@angular/core";
import { AuthService } from "./../auth/auth.service";

@Component({
  selector: "app-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.css"]
})
export class ContentComponent {
  constructor(private authService: AuthService) {}
}