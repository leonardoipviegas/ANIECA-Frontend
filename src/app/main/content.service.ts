import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({ providedIn: "root" })
export class ContentService {
  headers = new HttpHeaders({ "Content-Type": "application/json" });

  constructor(private http: HttpClient) {}

  addImage(file, cb) {

    const fd = new FormData();
    fd.append('image', file, file.name)

    // It is necessary to add the url below
    // This is the frontend part that connects to
    // the backend I did in Firebase unsuccessfully
    this.http.post('ADD URL HERE', fd).subscribe(res => cb(res))

  }
}
