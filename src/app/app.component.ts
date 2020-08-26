import { Component } from '@angular/core';
import { Link } from './link/link.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  links: Link[];

  constructor(){
    this.links = [
      new Link('Angular', 'htpps://angular.io', 100),
      new Link('Google', 'htpps://google.com', 30),
      new Link('Youtube', 'htpps://youtube.com', 50)
    ];
  }


  addLink(title:HTMLInputElement, link: HTMLInputElement){
    this.links.push(new Link(title.value, link.value));
    link.value='';
    title.value = '';
    return false;
  }

}


