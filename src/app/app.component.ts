import { Component, Input } from '@angular/core';
import {Observable} from 'rxjs/Rx';

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
                <jumbo></jumbo>

                
                `,

    directives: [JumboComponent],
    //             ZippyAppComponent,
    //             ZippyBootComponent,
    //             ZippyFolioComponent,
    //             ZippyScrumComponent,
    //             ZippySmitonComponent,
    //             ContactComponent,
    //             FooterComponent],
})

export class AppComponent {

    viewMode = ['apps', 'bootstrap', 'scrum', 'desk', 'contact'];

    onUpChange($event){
        console.log($event);
    }

    isUp = true;

    onClick(){
        this.isUp = !this.isUp;
    }

    isExpanded = true;

   @Input() heading: string;

    toggle(){
        this.isExpanded = !this.isExpanded;
    }

}
