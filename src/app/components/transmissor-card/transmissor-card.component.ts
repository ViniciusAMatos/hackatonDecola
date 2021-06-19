import { Component, Input, OnInit } from '@angular/core';
import { TransmissorApiModel } from 'src/app/services/transmissor/transmissor-api-model';

@Component({
  selector: 'app-transmissor-card',
  templateUrl: './transmissor-card.component.html',
  styleUrls: ['./transmissor-card.component.css']
})
export class TransmissorCardComponent implements OnInit {
  @Input() transmissor: TransmissorApiModel | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
