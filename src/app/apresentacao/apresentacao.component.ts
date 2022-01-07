import { Component, OnInit } from '@angular/core';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'apresentacao',
  templateUrl: './apresentacao.component.html',
  styleUrls: ['./apresentacao.component.scss']
})
export class ApresentacaoComponent implements OnInit {
  faDownload = faDownload


  constructor() { }

  ngOnInit(): void {
  }

}
