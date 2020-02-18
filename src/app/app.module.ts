import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ShowHidePasswordModule } from "ngx-show-hide-password";
import { AppRoutingModule } from "./app-routing.module";
import { LoginComponent } from "./auth/login.component";
import { AppComponent } from "./app.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptor } from "./auth/auth-interceptor";
import { HeaderComponent } from "./header/header.component";
import { StartComponent } from "./start.component";
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { MainComponent } from "./main/main.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AccountsComponent } from "./main/accounts.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { TrafficSignsComponent } from "./main/traffic-signs.component";
import { TreeDiagramComponent } from "./main/tree-diagram/tree-diagram.component";

import {
  TooltipModule,
  ModalModule,
  BsDropdownModule,
  AlertModule,
  TabsModule,
  CollapseModule
} from "ngx-bootstrap";

@NgModule({
  declarations: [
    StartComponent,
    AppComponent,
    LoginComponent,
    HeaderComponent,
    MainComponent,
    AccountsComponent,
    TrafficSignsComponent,
    TreeDiagramComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    ShowHidePasswordModule,
    TabsModule.forRoot(),
    AlertModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    CollapseModule.forRoot(),
    FormsModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [StartComponent]
})
export class AppModule {}
