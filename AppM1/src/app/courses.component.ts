import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
    

    <button class="btn btn-primary" [class.active]="isActive">Save</button>

    {{course.rating | number: '5.3-3'}}
    `

})



/* <h2> {{ title }} </h2>  // string interpolation // <h2 [textContent]="title"></h2>
    <img [src]="imageUrl" /> // property binding   // <img src="{{imageUrl}}" /> */


export class CoursesComponent {
    title = "List of courses";
    imageUrl= "http://lorempixel.com/400/200";
    isActive=false;

    course={
        rating: 4444.975
    }


}