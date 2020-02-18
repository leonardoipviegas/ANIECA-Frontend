import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./auth/auth.guard";
import { AppComponent } from "./app.component";
import { AdminGuard } from "./auth/admin.guard";
import { LoginComponent } from "./auth/login.component";
import { SchoolGuard } from "./auth/school.guard";
import { AccountsComponent } from "./main/accounts.component";
import { TrafficSignsComponent } from './main/traffic-signs.component';

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
        path: "traffic-signs",
        component: TrafficSignsComponent
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
