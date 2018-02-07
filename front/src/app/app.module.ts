import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './header/register/register.component';
import { TokenComponent } from './header/token/token.component';

import { CommonService } from './service/common.service';
import { UserListComponent } from './header/user-list/user-list.component';
import { FilterPipeModule } from 'ngx-filter-pipe';
import {NgxPaginationModule}from 'ngx-pagination';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    TokenComponent,
    UserListComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    FilterPipeModule,
    NgxPaginationModule,
    RouterModule.forRoot([
      {path:"token",component:TokenComponent},
     {path:"register",component:RegisterComponent},
    {path:"userList",component:UserListComponent}])
    

  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
