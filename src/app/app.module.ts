import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './/app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';


const appRoutes: Routes = [
  {
  path: 'about',
  component: AboutComponent
  },
  {
  path: 'home',
  component: HomeComponent
  },
  {
  path: 'login',
  component: LoginComponent
    }
];

@NgModule({ 
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


