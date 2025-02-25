import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: '<div><img src="https://media.giphy.com/media/A9EcBzd6t8DZe/giphy.gif" ></div>',
  styles: [`
    div {
      position: relative;
      width: 100%;
      height: 100vh;
      display: flex;
      align-items: flex-start;
      justify-content: center;
    }
  `]
})
export class NotFoundComponent {

}
