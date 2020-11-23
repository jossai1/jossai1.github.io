import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  techSkills: string[] = ['JavaScript (ES6)', 'Typescript', 'HTML', 'CSS',
    'Angular2+', 'VueJS', 'AngularJS', 'React', 'Java', 'Spring Boot',
    'Jasmine', 'Jest', 'Maven', 'Mockito', 'Unit Testing (JUnit)',
    'Node.js', 'Express', 'MongoDB', 'Firebase', 'UX/UI', 'Accessibility', 'Cloud application development', 'MEAN Stack'];

  softSkills: string[] = ['Software engineering', 'Frontend development', 'Backend development', 'Problem-solving'];

  skills: string[] = this.techSkills.concat(this.softSkills);
};
