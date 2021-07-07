import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { InstrumentModel } from "./Models/instrument.model";


@Injectable({
    providedIn: 'root'
})

export class DataService {
    public url = 'https://localhost:44391/api';

    constructor(
        private http: HttpClient
    ) { }

    getInstruments() {
        return this.http.get<InstrumentModel[]>(`${this.url}/instrumentos`);
    }

}