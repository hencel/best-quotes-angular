import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showForm = false;
  blueColor = 'blue';

  showFormHandler(): void {
    this.showForm == false ? this.showForm = true : this.showForm = false;
  }
}
