import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';  

import { AppComponent } from './app.component';
import { ROUTES } from './app.routing';
import { AuthenticationModule } from './modules/authentication.module';
import { MainPageComponent } from './modules/main_page/main_page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AuthenticationModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
