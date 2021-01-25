import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SearchResult } from "../models/SearchResult";

@Injectable()
export class SearchService {

    constructor(private http: HttpClient) {

    }

    protected urlServiceV1: string = 'http://localhost:5000/api/SearchGoogle/';

    realizarBusca(query: string) : Observable<SearchResult> {
        return this.http
            .get<SearchResult>(this.urlServiceV1+query);
    }
}