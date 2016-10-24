import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: '<p>The hero\'s birthday is {{ birthday | date }}</p>'
})
export class AppComponent {
   birthday = new Date(1988, 3, 15); // April 15, 1988
 }
