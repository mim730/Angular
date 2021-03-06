import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses2;
  courses= [
    { id: 1, name: 'course1'},
    { id: 2, name: 'course2'},
    { id: 3, name: 'course3'}
  ];

  onAdd(){
    this.courses.push({ id: 4, name: 'course4'});
  }

  onRemove(course){
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }

  onChange(course){
    course.name = 'UPDATED';
  }

  loadCourses(){
    this.courses2= [
    { id: 10, name: 'course10'},
    { id: 11, name: 'course11'},
    { id: 12, name: 'course12'}
    ];
    }

    trackCourse(index, course2){
      return course2 ? course2.id : undefined;
    }
    
}
