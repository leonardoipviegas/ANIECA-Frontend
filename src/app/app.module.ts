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
import { SegRodABComponent } from "./main/app-tree/rod-saf-a-b/rod-saf-a-b.component";
import { DispComABComponent } from "./main/app-tree/com-prov-a-b/com-prov-a-b.component";
import { DispEspAComponent } from "./main/app-tree/spec-prov-a/spec-prov-a.component";
import { ModsTeorPratCDComponent } from "./main/app-tree/prat-theo-mods-c-d/prat-theo-mods-c-d.component";
import { ModsTeorPratABComponent } from "./main/app-tree/prat-theo-mods-a-b/prat-theo-mods-a-b.component";
import { SegRodCDComponent } from "./main/app-tree/rod-saf-c-d/rod-saf-c-d.component";
import { DispComCDComponent } from "./main/app-tree/com-prov-c-d/com-prov-c-d.component";
import { DispEspCComponent } from "./main/app-tree/spec-prov-c/spec-prov-c.component";
import { DispEspDComponent } from "./main/app-tree/spec-prov-d/spec-prov-d.component";
import {
  TooltipModule,
  ModalModule,
  BsDropdownModule,
  AlertModule,
  TabsModule,
  CollapseModule,
  AccordionModule
} from "ngx-bootstrap";
import { ContentComponent } from "./main/content.component";
import { TreeHeaderComponent } from './main/app-tree/tree-header/tree-header.component';

@NgModule({
  declarations: [
    StartComponent,
    AppComponent,
    LoginComponent,
    HeaderComponent,
    MainComponent,
    AccountsComponent,
    TrafficSignsComponent,
    TreeDiagramComponent,
    ContentComponent,
    SegRodABComponent,
    DispComABComponent,
    DispEspAComponent,
    ModsTeorPratCDComponent,
    ModsTeorPratABComponent,
    SegRodCDComponent,
    DispComCDComponent,
    DispEspCComponent,
    DispEspDComponent,
    TreeHeaderComponent
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
    NgbModule,
    AccordionModule.forRoot()
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [StartComponent]
})
export class AppModule {}
