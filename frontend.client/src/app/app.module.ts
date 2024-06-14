import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ComponentsModule } from './components/components.module';
import { MaterialModule } from './shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule(
  {
    declarations: [
        AppComponent
   ],
  bootstrap: [AppComponent],
    imports: [
      BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        ComponentsModule,
        MaterialModule,
        ReactiveFormsModule,
        FormsModule,
        ToastrModule.forRoot({
            timeOut: 4000,
            progressBar: true,
            closeButton: true
        })], providers: [
        provideAnimationsAsync(),
        provideHttpClient(withInterceptorsFromDi())
    ] })
export class AppModule { }
