import { Injectable } from "@angular/core";
import { AuthData } from "./auth-data.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "./../../environments/environment";
import { Router } from "@angular/router";
import * as jwt_decode from "jwt-decode";

@Injectable({ providedIn: "root" })
export class AuthService {
  headers = new HttpHeaders({ "Content-Type": "application/json" });
  accountExists = false;
  accountNotFound = false;
  isAunthenticated = false;
  token = "";
  idAccount: string;
  tokenTimer: any;

  constructor(private http: HttpClient, private router: Router) {}

  getIsAuth() {
    return this.isAunthenticated;
  }

  getToken() {
    return this.token;
  }
  getEntity() {
    return jwt_decode(this.getToken()).entity
  }
  autoAuthUser() {
    const authInformation = this.getAuthData();
    if (!authInformation) {
      return;
    }
    const now = new Date();
    const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
    if (expiresIn > 0) {
      this.token = authInformation.token;
      this.isAunthenticated = true;
      this.setAuthTimer(expiresIn / 1000);
      this.idAccount = authInformation.idAccount;
    }
  }

  private setAuthTimer(duration: number) {
    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, duration * 1000);
  }

  logout() {
    this.token = null;
    this.isAunthenticated = false;
    this.clearAuthData();
    this.idAccount = null;
    clearTimeout(this.tokenTimer);
    this.router.navigate(["/login"]);
  }

  getidAccount() {
    return this.idAccount;
  }

  private getAuthData() {
    const token = localStorage.getItem("token");
    const expirationDate = localStorage.getItem("expiration");
    const idAccount = localStorage.getItem("idAccount");
    if (!token || !expirationDate) {
      return;
    }
    return {
      token,
      idAccount,
      expirationDate: new Date(expirationDate)
    };
  }

  login({ Email, Permit, Password }) {
    const authData: AuthData = { Email, Permit, Password };

    this.http
      .post<{ token: string; expiresIn: number; idAccount: string }>(
        environment.apiUrl + "/login",
        authData
      )
      .subscribe(
        res => {
          this.accountExists = false;
          this.token = res.token;
          if (this.token) {
            const expiresInDuration = res.expiresIn;
            this.setAuthTimer(expiresInDuration);
            this.isAunthenticated = true;
            this.idAccount = jwt_decode(res.token)._id;
            const now = new Date();
            const expirationDate = new Date(
              now.getTime() + expiresInDuration * 1000
            );
            this.saveAuthData(this.token, expirationDate, this.idAccount);
            this.router.navigate(["/"]);
          }
        },
        error => {
          if (error["status"] === 401) {
            this.accountNotFound = true;
          }
        }
      );
  }

  createAccount({ Email, Permit, Password }, Entity: number, cb) {
    const authData: AuthData = { Email, Permit, Password, Entity };

    this.http
      .post(environment.apiUrl + "/signup", authData, { headers: this.headers })
      .subscribe(
        res => {
          this.accountExists = false;
          cb(res)
        },
        error => {
          if (error.status === 400) {
            this.accountExists = true;
          }
        }
      );
  }

  private saveAuthData(token: string, expirationDate: Date, idAccount: string) {
    localStorage.setItem("token", token);
    localStorage.setItem("expiration", expirationDate.toISOString());
    localStorage.setItem("idAccount", idAccount);
  }

  private clearAuthData() {
    localStorage.removeItem("token");
    localStorage.removeItem("expiration");
    localStorage.removeItem("idAccount");
  }
}
