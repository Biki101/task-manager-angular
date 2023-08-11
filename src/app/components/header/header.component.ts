import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  title: string = 'Task Tracker';
  constructor() {}
  // ----------- initializing component -----------
  ngOnInit(): void {}
  // ----------- initializing component End -----------
  toggleAddTask() {
    console.log('toggle');
  }
}
