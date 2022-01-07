import { Component, OnInit } from '@angular/core';

import { faTelegramPlane, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'sobremim-contato',
  templateUrl: './sobremim-contato.component.html',
  styleUrls: ['./sobremim-contato.component.scss']
})
export class SobremimContatoComponent implements OnInit {
  
  
  constructor() { }
  
  ngOnInit(): void {
  }
  
  icons = { faTelegramPlane, faInstagram, faLinkedin, faEnvelope }
}
