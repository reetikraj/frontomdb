import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class OmdbService {
  movieTitle: string;

  constructor(
    private http: HttpClient
  ) { }

  searchMovies(): Observable<any> {
    if (this.movieTitle === undefined || this.movieTitle === null) { this.movieTitle = ''; }
    const url = 'https://omdb-backend-apna.herokuapp.com/api/omdb/search?title=' + this.movieTitle;
    
    return this.http.get(url);
  }
}
