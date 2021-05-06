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
  newQuotation: Quotation = {
    author: '',
    quotation: '',
    votes: 0
  };

  showFormHandler($event): void {
    this.showForm == false ? this.showForm = true : this.showForm = false;
  }

  addNewQuotes() {
    this.quotes.unshift(this.newQuotation); //add the new quotation to the top of the list
    this.newQuotation = { //cleaning quotation object after adding quotation
      author: '',
      quotation: '',
      votes: 0
    };
  }

}
