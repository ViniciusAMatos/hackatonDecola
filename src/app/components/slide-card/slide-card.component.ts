import { Component, OnInit, Input } from '@angular/core';
import { RegioesApiModel } from 'src/app/services/regioes/regioes-api-model';
import { RegioesApiService } from 'src/app/services/regioes/regioes-api.service';
import { RegioesProblemasApiModel } from 'src/app/services/regioes/regioes-problemas-api-model';

@Component({
  selector: 'app-slide-card',
  templateUrl: './slide-card.component.html',
  styleUrls: ['./slide-card.component.css']
})
export class SlideCardComponent implements OnInit {

  listaRegioes: RegioesApiModel[] = [];
  regiaoAtual: RegioesApiModel = {
    cidade: '',
    id: 0,
    imagem: '',
    problemas: [{
      descricao: '',
      porcentagem: ''
    }],
    regiao: ''
  };

  constructor(public regioesApi: RegioesApiService) { }

  ngOnInit(): void {
    this.regioesApi.get().subscribe({
      next: ((retApi) => {
        this.listaRegioes = retApi;
        this.regiaoAtual = this.listaRegioes[0];
      })
    })
  }

}
