import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  @ViewChild('navButton') butaoNav: HTMLElement;
  @ViewChild('menuMobile') menuMobile: ElementRef;
  @ViewChildren('burgerButton') burgersButton: QueryList<object>;
  
  constructor() { }
  ngOnInit(): void {
    console.log('oninit')
  }

  
  private menu = {
    open: false,
  }

  navMenu(): void {
    if (this.menu.open === true) {
      this.fecharMenu()
    } else if (this.menu.open === false) {
      this.abrirMenu()
    }
  }

  abrirMenu(): void {
    this.menu.open = true
    this.menuMobile.nativeElement.dataset.menu = 'ativo';
    this.burgersButton.forEach(burgerButton => {
      let elementBurger: any = burgerButton;
      elementBurger.nativeElement.dataset.filhoBurger = 'ativo'
    })
  }

  fecharMenu(): void {
    this.menu.open = false;
    this.menuMobile.nativeElement.dataset.menu = 'inativo';
    this.burgersButton.forEach(burgerButton => {
      let elementBurger: any = burgerButton;
      elementBurger.nativeElement.dataset.filhoBurger = 'inativo'
    })
  }



}
