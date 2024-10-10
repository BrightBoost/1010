import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  // Message to pass to the child component
  parentMessage = 'Message from Parent';

  // Message received from the child component
  childMessage = '';

  receiveMessage($event: any) {
    this.childMessage = $event;
  }
}
