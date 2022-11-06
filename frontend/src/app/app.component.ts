import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    email = "me@example.com";

    onKeyUp() {
      console.log(this.email)
    }

    input(event: Event) {
        this.email = (event.target as HTMLInputElement).value;
    }
}
