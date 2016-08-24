import {Component} from 'angular2/core';

@Component({
    selector: 'lekker-jumbotron',
    template: `
            
    <div class="jumbotron">
        <div class="container">
            <h1 class="jumbo-intro">Lekker IT</h1>
            <p class="lead">Watch this space for more yummy sites, native apps and super-cool coding.</p>
          <p class="lead">
            <a class="btn btn-primary btn-lg" a href="mailto:barry@lekkerit.com" role="button">barry@lekkerit.com</a></p>
        </div>
        </div>
        
        `,        
})

export class LekkerJumbotronComponent  {}   