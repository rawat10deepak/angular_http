import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CallExternalWebServiceComponent } from './call-external-web-service/call-external-web-service.component';
import { RxjsErrorHandlingComponent } from './rxjs-error-handling/rxjs-error-handling.component';

@NgModule({
  declarations: [AppComponent, CallExternalWebServiceComponent, RxjsErrorHandlingComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
