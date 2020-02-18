import { Component } from "@angular/core";
import { AuthService } from './auth/auth.service';

@Component({
  selector: "app-main",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(private authService: AuthService) {}

}
