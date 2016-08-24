import {Component} from 'angular2/core';

@Component({
    selector: 'lekker-navbar',
    template: `

     <nav class="navbar-static-top navbar-default" id="home">
        <div class="container-fluid">
            <div class="navbar-brand">
            <button class="navbar-toggle" data-toggle="collapse" data-target=".navHeaderCollapse">Menu</button>
            <div class="collapse navbar-collapse navHeaderCollapse">

    <ul class="nav nav-pills">
        <li [class.active]="viewMode == 'home'"><a (click)="viewMode = 'home'">Home</a></li>
        <li [class.active]="viewMode == 'about'"><a (click)="viewMode = 'about'">About</a></li>
        <li [class.active]="viewMode == 'portfolio'"><a (click)="viewMode = 'portfolio'">Portfolio</a>
            </li>
        <li [class.active]="viewMode == 'contact'"><a href="mailto:barry@lekkerit.com" (click)="viewMode = 'contact'">Contact</a></li>
        <li [class.active]="viewMode == 'desk'"><a href="http://www.lekkerit.com/desk" (click)="viewMode = 'desk'">Desk</a></li>
    </ul>

    <div [ngSwitch]="viewMode">
        <template [ngSwitchWhen]="'home'" ngSwitchDefault><lekker-jumbotron></lekker-jumbotron></template>
        <template [ngSwitchWhen]="'about'"><lekker-about-me></lekker-about-me></template>
        <template [ngSwitchWhen]="'portfolio'">
            <zippy-smiton heading="Freelance Developer"></zippy-smiton>
            <zippy heading="Scrum Master"></zippy>                
            <zippy-bootstrap heading="Bootstrap"></zippy-bootstrap>
            <zippy-weather heading="Applications"></zippy-weather>
        </template>
    </div>

    </div>
    </div>
    </div>
    
        `,        
})

export class LekkerNavbarComponent  {

    viewMode = ['home', 'about', 'portfolio', 'contact', 'desk'];
}