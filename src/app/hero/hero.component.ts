import { Movie } from './../section/types';
import { GetDataService } from './../get-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit{
  posterUrl = ''
  movie! : Movie
  constructor(private _getData: GetDataService) {
    }

    ngOnInit(): void {
      this._getData.getData('trending/all/day?language=en-US').subscribe((res)=>{

        this.movie = res.results[this.random(20)]
        this.posterUrl = `https://image.tmdb.org/t/p/original${this.movie.backdrop_path}`
            })
    }

    random(max: number){
      return Math.round(Math.random() * max)
    }
}
