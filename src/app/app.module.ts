

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { MentionModule } from 'angular-mentions';
import { AuthGuardService } from './authGuardService';
import { QuillModule } from 'ngx-quill'




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GalleryComponent,
    AboutComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ModalModule,
    FormsModule,
    MentionModule,
    QuillModule.forRoot()
    ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
