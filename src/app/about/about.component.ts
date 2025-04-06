import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  skill: string[] = [
    'html',
    'css3',
    'java script',
    'boot strap',
    'angular',
    'react',
    'sass',
    'git',
    'github',
    'jquery',
    'tailwind',
    'type script',
  ];
  tools: string[] = ['visual code', 'postman', 'NPM', 'font awesome', 'vercel'];
}
