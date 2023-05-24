import { Component, HostListener, Input, OnInit } from '@angular/core';
import { GetDataService } from '../get-data.service';
import { Movie, Movies } from './types';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit{
@Input()  sectionName = ''
@Input() url = ''

  movies! : Movie[]
  theMovies = ''
  constructor(private _getData: GetDataService){}

  ngOnInit(): void {

    this.sectionName = this.sectionName.replace('_', ' ')
      this._getData.getData(this.url).subscribe((res)=>{
        this.movies = res.results
        this.theMovies = JSON.stringify(res.results)


      })
  }
}
