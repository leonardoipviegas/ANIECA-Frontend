import { Component, OnInit } from "@angular/core";
import { AuthService } from './auth/auth.service';

@Component({
  selector: "app-root",
  templateUrl: "./start.component.html"
})
export class StartComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.autoAuthUser();
  }
}