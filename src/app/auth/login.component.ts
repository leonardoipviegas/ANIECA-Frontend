import { Component, OnInit } from '@angular/core';
import { TabDirective } from 'ngx-bootstrap';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from './auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'seguranca-rodoviaria';

  loginType = 'Pessoal';

  loginForm: FormGroup;

  submitted: boolean;
  
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      Email: new FormControl(null, Validators.email),
      Permit: new FormControl(null, Validators.pattern("^[0-9]*$")),
      Password: new FormControl(null, [
        Validators.required,
        Validators.minLength(5)
      ])
    });
  }

  onSelect(data: TabDirective): void {
    this.loginType = data.heading;
    if (data.heading === "Pessoal")
      this.loginForm.patchValue({ Password: null });
    else this.loginForm.patchValue({ Password: null });
  }

  get f() {
    return this.loginForm.controls;
  }

  onLogin() {
    if (this.loginForm.invalid) {
      this.submitted = true;
      this.loginForm.patchValue({ Password: null });
      return;
    }
    this.authService.login(this.loginForm.value)
  }
}
