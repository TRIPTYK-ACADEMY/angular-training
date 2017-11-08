import { SearchResult } from './../models/search-result.model';
import { Observable } from 'rxjs/Observable';
import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
export const YOUTUBE_API_KEY = 'AIzaSyB3gSHAmVNe1XfIQTiSdh1fg901fC-Br_s';
export const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/search';
@Injectable()
export class YouTubeSearchService {
  constructor(
    private http: Http,
    @Inject(YOUTUBE_API_KEY) private apiKey: string,
    @Inject(YOUTUBE_API_URL) private apiUrl: string
  ) {}
  search(query: string): Observable<SearchResult[]> {
    const params: string = [
      `q=${query}`,
      `key=${this.apiKey}`,
      `part=snippet`,
      `type=video`,
      `maxResults=10`
    ].join('&');
    const queryUrl = `${this.apiUrl}?${params}`;
    return this.http.get(queryUrl).map((res: Response) => {
      return res.json().items.map(item => {
        console.log('raw item', item);
        return new SearchResult({
          id: item.id.videoId,
          title: item.snippet.title,
          description: item.snippet.description,
          thumbnailUrl: item.snippet.thumbnails.high.url
        });
      });
    });
  }
}
