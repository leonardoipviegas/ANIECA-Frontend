import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({ providedIn: "root" })
export class AccountsService {
  headers = new HttpHeaders({ "Content-Type": "application/json" });

  constructor(private http: HttpClient) {}

  getAccounts(cb) {
    this.http
      .get(environment.apiUrl + "/account/", { headers: this.headers })
      .subscribe(
        res => cb(null, res),
        err => cb(err)
      );
  }
  deleteAccount(id: number, cb) {
    this.http
      .delete(environment.apiUrl + "/account/?idAccount=" + id, {
        headers: this.headers
      })
      .subscribe(
        res => cb(null, res),
        err => cb(err)
      );
  }
}
