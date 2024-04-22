import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LatLngLiteral } from 'leaflet';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) { }

  getCurrentLocation(): Observable<LatLngLiteral>{
    return new Observable((observer) => {
      if(!navigator.geolocation) return;

      return navigator.geolocation.getCurrentPosition(
        (pos) => {
          observer.next({
            lat: pos.coords.latitude,
            lng: pos.coords.longitude
          })
        },
        (error) => {
          observer.error(error);
        }
      )
    })
  }
  reverseGeocode(latlng: LatLngLiteral): Observable<string> {
    const apiKey = 'rinkal'; 
    const apiUrl = `https://api.opencagedata.com/geocode/v1/json?key=${apiKey}&q=${latlng.lat},${latlng.lng}&pretty=1`;

    return this.http.get<any>(apiUrl).pipe(
      map((response: { results: string | any[]; }) => {
        if (response.results && response.results.length > 0) {
          return response.results[0].formatted;
        } else {
          throw new Error('Address not found');
        }
      })
    );
  }
}