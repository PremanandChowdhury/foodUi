import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  categories: any[] = [];
  featured: any[] = [];
  highlights: any[] = [];

  catSlideOptions = {
    slidesPerView: 3.5,
    spaceBetween: 10,
    slidesOffsetBefore: 11,
    freeMode: true,
  };

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get('https://devdactic.fra1.digitaloceanspaces.com/foodui/home.json')
      .subscribe((result: any) => {
        this.categories = result.categories;
        this.featured = result.featured;
        this.highlights = result.hightlights;
      });
  }
}
