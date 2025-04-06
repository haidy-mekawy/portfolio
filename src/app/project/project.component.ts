import { Component } from '@angular/core';
interface iwork {
  Img: string;
  title: string;
  desc: string;
  demo: string;
  github: string;
}

@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css',
})
export class ProjectComponent {
  works: iwork[] = [
    {
      Img: '/img/bazaar-logo.jpg',
      title: 'Ecommerce Bazaar',
      desc: ' An eCommerce platform that is more than 13+ pages with Angular 19 and Tailwind CSS, featuring product listings, shopping cart functionality, and order management',
      demo: 'https://e-commerce-ashy-one-75.vercel.app/login',
      github: 'https://github.com/haidy-mekawy/e-commerce.git',
    },
    {
      Img: '/img/hero-bg.jpg',
      title: 'DEVFOLIO portfolio',
      desc: 'It serves as a digital resume to highlight their experience, technical expertise, and past work—typically aimed at potential employers or collaborators.',
      demo: 'https://haidy-mekawy.github.io/devfolio/',
      github: 'https://github.com/haidy-mekawy/devfolio.git',
    },
    {
      Img: '/img/logo.jpeg',
      title: 'WeatherApp',
      desc: 'A weather forecast application built using javascript that retrieves and displays live weather data from a public API, offering users current weather information for their location.',
      demo: 'https://haidy-mekawy.github.io/weather-in-whole-world/',
      github: 'https://github.com/haidy-mekawy/weather-in-whole-world.git',
    },
    {
      Img: '/img/quotes.png',
      title: 'Quotes',
      desc: '​The website appears to feature a collection of "scary quotes." It includes a cautionary note advising individuals with a weak heart to refrain from proceeding. This suggests that the content may be unsettling or intense.',
      demo: 'https://haidy-mekawy.github.io/quotes/',
      github: 'https://github.com/haidy-mekawy/quotes.git',
    },
    {
      Img: '/img/BOOKMARK.png',
      title: 'BookMarkers',
      desc: ' A web application designed to help users manage their favorite websites by allowing them to create, read, update, and delete (CRUD) bookmarks.',
      demo: 'https://haidy-mekawy.github.io/bookmarkers/',
      github: 'https://github.com/haidy-mekawy/bookmarkers.git',
    },
  ];
}
