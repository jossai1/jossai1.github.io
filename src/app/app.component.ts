import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  //skills: Array<String>;
  skills: string[] = ['Angular 1,2 & 4', 'Java', 'Spring Boot', 'HTML','CSS', 'JS', 'Cloud application development', 'SQL', 'MSSQL', 'MongoDB', 'MEAN Stack', 'Ionic Framework', 'Agile Application Development'
  ,'Unity', 'Python', 'Communication', 'Teamwoerk', 'Presentation Skills', 'Customer Service'];
}
