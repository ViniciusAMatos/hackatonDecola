import { Component, OnInit } from '@angular/core';
import { RegioesApiModel } from 'src/app/services/regioes/regioes-api-model';
import { RegioesApiService } from 'src/app/services/regioes/regioes-api.service';

@Component({
  selector: 'app-regioes-page',
  templateUrl: './regioes-page.component.html',
  styleUrls: ['./regioes-page.component.css']
})
export class RegioesPageComponent implements OnInit {

  listaRegioes: RegioesApiModel[] = [];

  constructor(public regioesApi: RegioesApiService) { }

  ngOnInit(): void {
    this.regioesApi.get().subscribe({
      next: ((retApi) => {
        this.listaRegioes = retApi.sort((a, b) => a.cidade < b.cidade ? -1 : 1).filter((v) => !(v.id == 5));
        console.log(this.listaRegioes)
      })
    })
  }
}
