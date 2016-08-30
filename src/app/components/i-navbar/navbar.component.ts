import {Component} from '@angular/core';

@Component({
    selector: 'navbar',
    templateUrl: 'src/app/components/i-navbar/navbar.component.html',
    // styleUrls:['src/app/components/i-navbar/navbar.component.css'],
           
})

export class NavbarComponent  {

    viewMode = ['home', 'about', 'portfolio', 'contact', 'desk'];
}