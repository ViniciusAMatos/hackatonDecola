import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegioesApiModel } from './regioes-api-model';

@Injectable({
  providedIn: 'root'
})
export class RegioesApiService {

  constructor(private http: HttpClient) { }

  private apiURL = "https://it3-klj-default-rtdb.firebaseio.com/saneamentoRegioes.json";

  public get(): Observable<RegioesApiModel[]> {
    return this.http.get<RegioesApiModel[]>(this.apiURL);
  }
}
