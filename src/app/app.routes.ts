import { Routes } from '@angular/router';


export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { 
      path: 'home', 
      loadComponent: () => import('./home/home.component').then(m => m.HomeComponent) 
    },
    { 
      path: 'about', 
      loadComponent: () => import('./about/about.component').then(m => m.AboutComponent) 
    },
    { 
      path: 'contact', 
      loadComponent: () => import('./contact/contact.component').then(m => m.ContactComponent) 
    },
    { 
      path: 'project', 
      loadComponent: () => import('./project/project.component').then(m => m.ProjectComponent) 
    },
    { 
      path: 'resume', 
      loadComponent: () => import('./resume/resume.component').then(m => m.ResumeComponent) 
    },
    { 
      path: '**', 
      loadComponent: () => import('./notfound/notfound.component').then(m => m.NotfoundComponent) 
    }
  ];
  
