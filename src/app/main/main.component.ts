import { Component } from "@angular/core";
import { AuthService } from "./../auth/auth.service";

@Component({
  selector: "app-mainspace",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"]
})
export class MainComponent {
  constructor(private authService: AuthService) {}
}
