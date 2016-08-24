import { Component } from '@angular/core';

import {NavbarComponent} from './components/i-navbar/navbar.component';
import {JumboComponent} from './components/ii-jumbo/jumbo.component';
import {AboutComponent} from './components/iii-about/about.component';
import {ZippyScrumComponent} from './components/iv-portfolio/zippy-scrum/zippy-scrum.component';
import {ZippyFolioComponent} from './components/iv-portfolio/zippy-folio/zippy-folio.component';
import {ZippyAppComponent} from './components/iv-portfolio/zippy-app/zippy-app.component';
import {ZippySmitonComponent} from './components/iv-portfolio/zippy-smiton/zippy-smiton.component';
import {ZippyBootComponent} from './components/iv-portfolio/zippy-boot/zippy-boot.component';
import {ContactComponent} from './components/v-contact/contact.component';
import {FooterComponent} from './components/vi-footer/footer.component';

@Component({
    selector: 'my-app',
    template: `
    <div class="navbar-static-top navbar-default" role="navigation">
        <div class="container-fluid">
            <div class="navbar-brand">
            <button class="navbar-toggle" data-toggle="collapse" data-target=".navHeaderCollapse">Menu</button>
            <a class="navbar-brand" href="#"><img src="./logo.jpg"></a> 

    <ul class="nav nav-pills navbar-left">
        <li [class.active]="viewMode == 'home'"><a href="#" (click)="viewMode = 'home'">Home</a></li>
        <li [class.active]="viewMode == 'about'"><a href="#" (click)="viewMode = 'about'">About</a></li>
        <li [class.active]="viewMode == 'portfolio'"><a href="#" (click)="viewMode = 'portfolio'">Portfolio</a>
            </li>
        <li [class.active]="viewMode == 'contact'"><a href="#" (click)="viewMode = 'contact'">Contact</a></li>
        <li [class.active]="viewMode == 'desk'"><a href="http://www.lekkerit.com/desk" target= "_blank" (click)="viewMode = 'desk'">Desk</a></li>
    </ul>

    <div class="zippy-page" [ngSwitch]="viewMode">
        <template [ngSwitchWhen]="'home'" ngSwitchDefault><lekker-jumbotron></lekker-jumbotron></template>
        <template [ngSwitchWhen]="'about'"><lekker-about-me></lekker-about-me></template>
        <template [ngSwitchWhen]="'portfolio'">
            <zippy-smiton heading="Freelance Developer"></zippy-smiton>
            <zippy heading="Scrum Master"></zippy>                
            <zippy-bootstrap heading="Bootstrap"></zippy-bootstrap>
            <zippy-weather heading="Applications"></zippy-weather>
        </template>
        <template [ngSwitchWhen]="'contact'"><contact-form></contact-form></template>
    </div>
    </div>
    </div>
    </div>

    <lekker-footer></lekker-footer>

    <div class="container" class="container-img">
          
    </div>

                `,

    // directives: [NavbarComponent, 
    //             JumboComponent, 
    //             AboutComponent,
    //             ZippyAppComponent,
    //             ZippyBootComponent,
    //             ZippyFolioComponent,
    //             ZippyScrumComponent,
    //             ZippySmitonComponent,
    //             ContactComponent,
    //             FooterComponent],
})

export class AppComponent {

    viewMode = ['home', 'about', 'portfolio', 'contact', 'desk'];

    onUpChange($event){
        console.log($event);
    }

    isUp = true;

    onClick(){
        this.isUp = !this.isUp;
    }

}
