import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./auth/auth.guard";
import { AppComponent } from "./app.component";
import { AdminGuard } from "./auth/admin.guard";
import { LoginComponent } from "./auth/login.component";
import { SchoolGuard } from "./auth/school.guard";
import { AccountsComponent } from "./main/accounts.component";
import { TrafficSignsComponent } from "./main/traffic-signs.component";
import { ContentComponent } from "./main/content.component";
import { SegRodABComponent } from "./main/app-tree/rod-saf-a-b/rod-saf-a-b.component";
import { DispComABComponent } from "./main/app-tree/com-prov-a-b/com-prov-a-b.component";
import { DispEspAComponent } from "./main/app-tree/spec-prov-a/spec-prov-a.component";
import { ModsTeorPratCDComponent } from "./main/app-tree/prat-theo-mods-c-d/prat-theo-mods-c-d.component";
import { ModsTeorPratABComponent } from "./main/app-tree/prat-theo-mods-a-b/prat-theo-mods-a-b.component";
import { SegRodCDComponent } from "./main/app-tree/rod-saf-c-d/rod-saf-c-d.component";
import { DispComCDComponent } from "./main/app-tree/com-prov-c-d/com-prov-c-d.component";
import { DispEspCComponent } from "./main/app-tree/spec-prov-c/spec-prov-c.component";
import { DispEspDComponent } from "./main/app-tree/spec-prov-d/spec-prov-d.component";

const routes: Routes = [
  {
    path: "",
    component: AppComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "accounts",
        component: AccountsComponent,
        canActivate: [AuthGuard, AdminGuard]
      },
      {
        path: "road-safety-a-b",
        component: SegRodABComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "common-provisions-a-b",
        component: DispComABComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "specific-provisions-a",
        component: DispEspAComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "practical-theoretical-modules-a-b",
        component: ModsTeorPratABComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "road-safety-c-d",
        component: SegRodCDComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "common-provisions-c-d",
        component: DispComCDComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "specific-provisions-c",
        component: DispEspCComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "specific-provisions-d",
        component: DispEspDComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "practical-theoretical-modules-c-d",
        component: ModsTeorPratCDComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "traffic-signs",
        component: TrafficSignsComponent
      },
      {
        path: "content",
        component: ContentComponent,
        canActivate: [AuthGuard, SchoolGuard]
      }
    ]
  },
  { path: "login", component: LoginComponent },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard, AdminGuard, SchoolGuard]
})
export class AppRoutingModule {}
