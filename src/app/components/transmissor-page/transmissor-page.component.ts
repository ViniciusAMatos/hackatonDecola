import { Component, OnInit } from '@angular/core';
import { TransmissorApiModel } from 'src/app/services/transmissor/transmissor-api-model';
import { TransmissorApiService } from 'src/app/services/transmissor/transmissor-api.service';

@Component({
  selector: 'app-transmissor-page',
  templateUrl: './transmissor-page.component.html',
  styleUrls: ['./transmissor-page.component.css']
})
export class TransmissorPageComponent implements OnInit {

  listaDeTransmissores: TransmissorApiModel[] = [];

  constructor(public transmissoresApi: TransmissorApiService) { }

  denuncia(): void {
    alert("Ligue para 180 URGENTE");
  }

  ngOnInit(): void {
    this.transmissoresApi.get().subscribe({
      next: (retornoDaApi) => {
        this.listaDeTransmissores = retornoDaApi;
      }
    });
  }
}
