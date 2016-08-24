import {Component, Input} from 'angular2/core';

@Component({
    selector: 'zippy-portfolio',
    template: `

    <div class="lekker-portfolio">
        <div class="container">
        <div class="row padding">
        <h1 class="text-center" id="portfolio">Portfolio</h1>

        <zippy-smiton heading="Freelance Developer">
                </zippy-smiton>

                <zippy heading="Scrum Master">
                </zippy>
                
                <zippy-bootstrap heading="Bootstrap">
                </zippy-bootstrap>

                <zippy-weather heading="Applications">
                </zippy-weather>

    </div>
    </div>
    </div>
    
    `,

})

export class ZippyPortfolioComponent  { 
   
   isExpanded = false;

   @Input() heading: string;

    toggle(){
        this.isExpanded = !this.isExpanded;
    }
}