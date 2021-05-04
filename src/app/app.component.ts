import { Component } from '@angular/core';
import { QUOTES } from './models/data-base';
import { Quotation } from './models/quotation';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showForm = false;
  quotes: Quotation[] = QUOTES;

  showFormHandler($event): void {
    this.showForm == false ? this.showForm = true : this.showForm = false;
  }

}
