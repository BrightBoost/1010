import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  title: string = 'Data binding example';
  name: string = '';
  greeting: string = '';

  items: string[] = ['some', 'items', 'here', 'blabla'];
  showHello: boolean = true; 

  updateGreeting() {
    this.greeting = `Hello, ${this.name}!`;
  }
}
