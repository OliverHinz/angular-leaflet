import { Component } from '@angular/core';
import {LadenService } from './laden.service';
import { Igeoinhalt } from '../interfaces/geoinhalt';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-laden',
  templateUrl: './laden.component.html',
  providers: [ LadenService ],
  styles: ['.error {color: red;}']
})
export class LadenComponent {
  error: any;
  headers: string[];
  geoinhalt: Igeoinhalt;

  constructor(private LadenService: LadenService){}

  clear() {
    this.geoinhalt = undefined;
    this.error = undefined;
    this.headers = undefined;
  }

  printGeoInhalt(): string {
    let druck: string;
    druck = 'leer';
    return(druck);
  }

  showGeoinhalt() {
    this.LadenService.getGeoinhalt()
      .subscribe(
        (data: Igeoinhalt) => this.geoinhalt = { ...data }, // success path
        error => this.error = error // error path
      );
  }

  showGeoinhalt_v1() {
    this.LadenService.getGeoinhalt_1()
      .subscribe((data: Igeoinhalt) => this.geoinhalt = {
          type: data['type'],
          crs: { type: data['crstype'],
                 properties: {
                   name: data['crspropname'],
                 },
                },
          features: { type: data['feattype'],
                      properties: {
                        gml_id: data['featpropgml'],
                        Gemeinde_name: data['featpropgemn'],
                        Gemeinde_schluessel: data['featpropgems'],
                        Land_name: data['featproplann'],
                        Land_schluessel: data['featproplans'],
                        Schluessel_gesamt: data['featpropschg'],
                      },
                      geometry: {type: data['geotyp'],
                        coordinates: data['geocor']
                      },
                    },
         }
        );
  }


  showGeoinhalt_v2() {
    this.LadenService.getGeoinhalt()
      // clone the data object, using its known Config shape
      .subscribe((data: Igeoinhalt) => this.geoinhalt = { ...data });
  }

  showGeoinhaltAntwort() {
    this.LadenService.getGeoinhaltAntwort()
      // resp is of type `HttpResponse<Config>`
      .subscribe(resp => {
        // display its headers
        const keys = resp.headers.keys();
        this.headers = keys.map(key =>
          `${key}: ${resp.headers.get(key)}`);

        // access the body directly, which is typed as `Config`.
        this.geoinhalt = { ... resp.body };
      });
  }
  makeError() {
    this.LadenService.makeIntentionalError().subscribe(null, error => this.error = error );
  }
}
