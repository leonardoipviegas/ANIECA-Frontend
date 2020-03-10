import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Subject } from 'rxjs';

@Injectable({ providedIn: "root" })
export class TrafficSignsService {
  headers = new HttpHeaders({ "Content-Type": "application/json" });
  activeDiagram = new Subject();
  constructor(private http: HttpClient) {}

  signalType = new Subject();

  goToSignType(idSignalType: number) {
    this.activeDiagram.next(false);
    this.http
      .get(environment.apiUrl + "/content/traffic-signs/?idTraffic_Signs_Type=" + idSignalType, { headers: this.headers })
      .subscribe(
        res => this.signalType.next(res),
        err => this.activeDiagram.next(true)
      );
  }

  getSignsImage(idSignalType: number, cb) {
    this.http
    .get(environment.apiUrl + "/content/traffic-signs/images/?idTraffic_Signs_Type=" + idSignalType, { headers: this.headers })
    .subscribe(
      res => cb(false, res),
      err => cb(err)
    );
  }
  getSign(idTraffic_Signs: number, cb) {
    this.http
    .get(environment.apiUrl + "/content/traffic-signs/sign/?idTraffic_Signs=" + idTraffic_Signs, { headers: this.headers })
    .subscribe(
      res => cb(false, res),
      err => cb(err)
    );
  }
}
