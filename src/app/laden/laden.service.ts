import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Igeoinhalt } from '../interfaces/geoinhalt';
import { MessageService } from '../message.service';

export interface Igeoinhalt {
  type: string;
  crs: {
    type: string;
    properties: {
      name: string;
    };
  };
  features: {
    type: string;
    properties: {
      gml_id: string;
      Gemeinde_name: string;
      Gemeinde_schluessel: string;
      Land_name: string;
      Land_schluessel: string;
      Schluessel_gesamt: string;
    };
    geometry: {
      type: string;
      coordinates: string;
    };
  };
}


@Injectable({
  providedIn: 'root'
})
export class LadenService {
  ladeurl: string = '../../assets/berlin.geojson';
  public printGeoinhalt():string {
    let druck: string;
    druck = 'leer';
    return druck;
  }


  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }




  private log(message: string) {
    this.messageService.add(`LadeService: ${message}`);
  }

  public getGeoinhalt() {
    this.messageService.add('LadenService: fetched geoinhalt');
    return this.http.get<Igeoinhalt>(this.ladeurl)
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }

  getGeoinhalt_1() {
    return this.http.get(this.ladeurl);
  }

  getGeoinhalt_2() {
    // now returns an Observable of Igeoinhalt
    return this.http.get<Igeoinhalt>(this.ladeurl);
  }

  getGeoinhalt_3() {
    return this.http.get<Igeoinhalt>(this.ladeurl)
      .pipe(
        catchError(this.handleError)
      );
  }

  getGeoinhaltAntwort(): Observable<HttpResponse<Igeoinhalt>> {
    return this.http.get<Igeoinhalt>(
      this.ladeurl, { observe: 'response' });
  }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('Ein Fehler ist aufgetreten:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body war: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Etwas schlimmes ist passiert; bitte probiere es später.');
  };

  makeIntentionalError() {
    return this.http.get('keine/echte/url')
      .pipe(
        catchError(this.handleError)
      );
  }
}
