import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app works!';
  techSkills: string[] = ['JavaScript (ES6)', 'Typescript', 'HTML', 'CSS',
    'Angular2+', 'VueJS', 'AngularJS', 'React', 'Java', 'Spring Boot',
    'Jasmine', 'Jest', 'Maven', 'Mockito', 'Unit Testing (JUnit)',
    'Node.js', 'Express', 'MongoDB', 'Firebase', 'UX/UI', 'Accessibility', 'Cloud application development', 'MEAN Stack'];

  softSkills: string[] = ['Software engineering', 'Frontend development', 'Backend development', 'Problem-solving'];

  skills: string[] = this.techSkills.concat(this.softSkills);

  ngOnInit(): void {
    // Get the button
    const mybutton = document.getElementById('myBtn');

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction(); };

    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = 'block';
      } else {
        mybutton.style.display = 'none';
      }
    }
  }

  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
};
