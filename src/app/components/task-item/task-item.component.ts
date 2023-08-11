import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent {
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleTask: EventEmitter<Task> = new EventEmitter();
  @Input() task: Task;
  faTimes = faTimes;
  constructor() {
    this.task = { text: '', day: '', reminder: false, id: 0 };
  }

  onDelete(task: Task) {
    // console.log(task);
    this.onDeleteTask.emit(task);
  }

  onToggle(task: Task) {
    this.onToggleTask.emit(task);
  }
}
