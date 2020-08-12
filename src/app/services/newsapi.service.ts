import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {
  apiKey='17529755780e4a16b1fa1bda41ea6897'
  constructor(private http:HttpClient) { }
  
  getArticlesTechnology():Observable<any>{
    return this.http
    .get(
      'https://newsapi.org/v2/top-headlines?category=technology&language=en&country=us&apiKey=' +
      this.apiKey
    )
    .pipe(map((data:any)=>data.articles));
  }

  getArticlesJavascript():Observable<any>{
    return this.http
    .get(
      'https://newsapi.org/v2/top-headlines?category=technology&language=en&country=us&apiKey=' +
      this.apiKey
    )
    .pipe(map((data:any)=>data.articles));
  }




}
