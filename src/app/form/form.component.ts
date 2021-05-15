import { Component, Output, EventEmitter } from '@angular/core';
import { Quotation } from '../models/quotation';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Output() quotationNew = new EventEmitter<Quotation>();
  showForm = true;

  newQuotation: Quotation = {
    author: '',
    quotation: '',
    votes: 0
  };

  showFormHandler($event): void {
    this.showForm == false ? this.showForm = true : this.showForm = false;
  }

  addNewQuotes() {
    this.quotationNew.emit(this.newQuotation);
    this.newQuotation = { //cleaning quotation object after adding quotation
      author: '',
      quotation: '',
      votes: 0
    };
  }

}
