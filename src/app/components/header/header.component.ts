import { Component } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  title: string = 'Task Tracker';
  showAddTask: boolean = false;
  subscription: any;
  constructor(private uiService: UiService) {
    this.uiService.onToggle().subscribe((value) => (this.showAddTask = value));
  }
  // ----------- initializing component -----------
  ngOnInit(): void {}
  // ----------- initializing component End -----------
  toggleAddTask() {
    // console.log('toggle');
    this.uiService.toggleAddTask();
  }
}
