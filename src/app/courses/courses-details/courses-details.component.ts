import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-courses-details',
  templateUrl: './courses-details.component.html',
  styleUrls: ['./courses-details.component.scss']
})
export class CoursesDetailsComponent {
  selectedCourse;
  @Output() save = new EventEmitter();
  @Output() cancel = new EventEmitter();

  @Input() set course(value) {
    if (value) {
      this.selectedCourse = Object.assign({}, value);
    }
  };
}
