import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CallExternalWebServiceComponent } from './call-external-web-service/call-external-web-service.component';
import { RxjsErrorHandlingComponent } from './rxjs-error-handling/rxjs-error-handling.component';
import { HttpParamsComponent } from './http-params/http-params.component';
import { FormsModule } from '@angular/forms';
import { PackageSearchService } from './http-params/service/package-search.service';

@NgModule({
  declarations: [
    AppComponent,
    CallExternalWebServiceComponent,
    RxjsErrorHandlingComponent,
    HttpParamsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [PackageSearchService],
  bootstrap: [AppComponent],
})
export class AppModule {}
