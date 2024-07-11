import {  Injectable } from "@angular/core";
import { Http } from '@angular/http';


@Injectable()
export class SpotifyService {
    private searchURL : string;
    constructor(private _http: Http) {}

    searchMusic(str : string, type = 'artist') : void {
        this.searchURL = `https://api.spotify.com/search?q=${str}&type=${type}&offset=0`;
        return this._http.get(this.searchURL).map(res => res.json());
    }
}