import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = '1419001b6fc10dd745ac8c6e10ae327b';
  private baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) { }

  getTemperatureByCountry(country: string) {
    const url = `${this.baseUrl}?q=${country}&appid=${this.apiKey}&units=metric`;
    return this.http.get(url);
  }
}
