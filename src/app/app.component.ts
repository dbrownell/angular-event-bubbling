import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div>
     <event-bubbling (click)="onClick($event)"></event-bubbling>
    </div>
  `,
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  onClick(button: string) {
    alert(button);
  }
}
