import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Data, Review } from "../Models/Review.model";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class GetJson{

    constructor(private http: HttpClient){}

    getReviews(): Observable<Data> {
        return this.http.get<Data>('../../assets/Json/Review.json');
    }

}