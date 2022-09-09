import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ChuckNorrisService {

  constructor(private httpClient : HttpClient) { }

  reloadJoke = new Subject();

  loadJoke() {
    return this.httpClient.get<Joke>('https://api.chucknorris.io/jokes/random?category=dev');
  }
}

// 1. Copy url to clipboard
// 2. Use the shortcut STRG+ALT+X
export interface Joke {
	categories: string[];
	created_at: string;
	icon_url: string;
	id: string;
	updated_at: string;
	url: string;
	value: string;
}