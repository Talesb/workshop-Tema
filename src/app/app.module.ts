import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './paginas/home/home.component';
import { BackendComponent } from './paginas/backend/backend.component';
import { FrontendComponent } from './paginas/frontend/frontend.component';
import { SobreComponent } from './paginas/sobre/sobre.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BackendComponent,
    FrontendComponent,
    SobreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
