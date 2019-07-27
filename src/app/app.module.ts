import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegionauswahlComponent } from './regionauswahl/regionauswahl.component';
import { EinstellungComponent } from './einstellung/einstellung.component';
import { MapComponent } from './map/map.component';
import { LadenComponent} from './laden/laden.component';
import { MessagesComponent} from './messages/messages.component'
import { HttpClientModule } from '@angular/common/http';
import { LadenService } from './laden/laden.service';

@NgModule({
  declarations: [
    AppComponent,
    RegionauswahlComponent,
    EinstellungComponent,
    MessagesComponent,
    LadenComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [LadenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
