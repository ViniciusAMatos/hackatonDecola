import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { TransmissorApiModel } from './transmissor-api-model';

@Injectable({
  providedIn: 'root'
})
export class TransmissorApiService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'https://it3-klj-default-rtdb.firebaseio.com/saneamentoDoencas.json';

  public get(): Observable<TransmissorApiModel[]> {
    return this.http.get<TransmissorApiModel[]>(this.apiUrl);
  }
}
