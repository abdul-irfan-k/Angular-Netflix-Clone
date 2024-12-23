import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private readonly baseUrl: string = 'https://api.themoviedb.org/3';
  private readonly authroizationHeader: string =
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NGQ5ODA3OTg5Y2JhZDExNmQ0MDc5ZWY5ZTY2MmUyMiIsIm5iZiI6MTY2OTM0MTU0Mi43MDg5OTk5LCJzdWIiOiI2MzgwMjE2NjIyOWFlMjE1NWM1MjFlMDQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.RpKE3kD9wIwSV1GW6z8oLYYFz0NU0D_lswufOM0AGYw';

  constructor(private httpClient: HttpClient) {}

  get(url: string, params: Record<string, any>) {
    const httpParams = new HttpParams({ fromObject: params });
    return this.httpClient.get(`${this.baseUrl}/${url}`, {
      params: httpParams,
      headers: {
        Authorization: this.authroizationHeader,
      },
    });
  }

  post(url: string, data: any) {
    return this.httpClient.post(`${this.baseUrl}/${url}`, data);
  }
}
