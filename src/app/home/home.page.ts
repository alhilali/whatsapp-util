import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  number: Number;


  openWhatsapp() {
    window.open("https://wa.me/966" + this.number);
  }

}
