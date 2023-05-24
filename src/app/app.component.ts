import { Component } from '@angular/core';
import { KeyValue } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Netflix_Clone';
  urls = [
    { key: 'NETFLIX_ORIGINALS', value: 'discover/tv?with_networks=213' },
    { key: 'Trending', value: 'trending/all/week' },
    { key: 'Top_Rated', value: 'movie/top_rated?language=en-US' },
    { key: 'Action', value: 'discover/movie?language=en-US&with_genres=28' },
    { key: 'Comedy', value: 'discover/movie?language=en-US&with_genres=35' },
    { key: 'Romance', value: 'discover/movie?language=en-US&with_genres=10749' },
    { key: 'Documentary', value: 'discover/movie?language=en-US&with_genres=99' }
  ];
}
