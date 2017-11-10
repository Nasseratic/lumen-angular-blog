import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { CookiesService } from './cookies.service';
import { Http } from '@angular/http';
import { Headers, Response, RequestOptions, RequestMethod, URLSearchParams, Request } from '@angular/http';

@Injectable()
export class PostsService {
public url = 'http://localhost:8000/posts/';
  constructor(private http: Http, private cookies: CookiesService, private router: Router) {

   }

  public newPost($data, $url = this.url): Promise<any> {
    const $tokenValue = this.cookies.getCookie('token'),
    headerObj   = {'Content-Type' : 'application/json'};
    headerObj['token'] = $tokenValue;
    const headers: Headers = new Headers(headerObj),
        submitedData: Object = $data,
        requestOptions: RequestOptions = new RequestOptions({
          method: RequestMethod.Post,
          url: $url,
          headers: headers,
          body: JSON.stringify(submitedData)
        });
    return this.http.request(new Request(requestOptions)).toPromise()
      .then(response => {
        if (response.status === 400 ) {
          return false;
        }else {
          return this._getBody(response);
        }
      })
      .catch(reject => {
        return false;
      });
  }

  public getPosts( $url = this.url): Promise<any> {
    const headers: Headers = new Headers({ 'Content-Type': 'application/json' }),
        requestOptions: RequestOptions = new RequestOptions({
          method: RequestMethod.Get,
          url: $url,
          headers: headers
        });
    return this.http.request(new Request(requestOptions)).toPromise()
      .then(response => {
        console.log(response);
        if (response.status === 400 ) {
          return false;
        }else {
          return this._getBody(response);
        }
      })
      .catch(reject => {
        console.log(reject);
        return false;
      });
  }


  public getHomePosts( $url = this.url): Promise<any> {
    return this.getPosts($url + 'home');
  }

  private _getBody($data: Response) {
    const body = JSON.parse($data['_body']);
    return body || null;
  }

}


