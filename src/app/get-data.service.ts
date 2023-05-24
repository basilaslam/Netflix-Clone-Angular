import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie, Movies } from './section/types';


@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private _http: HttpClient) { }


  getData(params: string): Observable<Movies> {
   let url =  `https://api.themoviedb.org/3/${params}`
   let headers = new HttpHeaders({
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzA0ZGE2NDhlZTVlODUwYWJjYjIxYzUwMWEyM2MxNSIsInN1YiI6IjYwMTgxZmY0ODFhN2ZjMDA0MGZiMDc2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aPptWT7x5MINS2gA3az3Tqe0h5rjeUcgghDsC4B8xFI'
  })

   return this._http.get<Movies>(url, {headers,observe: 'body'})

  }
}
