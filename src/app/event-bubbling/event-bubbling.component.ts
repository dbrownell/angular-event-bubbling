import { Component, OnInit } from '@angular/core';
import { Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'event-bubbling',
  template: `
    <div>
      <button (click)="onClick($event, 'Button 1')">Button 1</button>
      <button (click)="onClick($event, 'Button 2')">Button 2</button>
    </div>
  `,
  styleUrls: ['./event-bubbling.component.css']
})
export class EventBubblingComponent {

  @Output() click = new EventEmitter();

  onClick(event: Event, button: string) {
    event.stopPropagation();

    this.click.next(button);
  }

}