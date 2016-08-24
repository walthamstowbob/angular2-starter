import {Component} from 'angular2/core';

@Component({
    selector: 'lekker-footer',
    template: `
            
    <div class="container">
    <div class="lekker-footer">

        <div class="col-lg-12">
            <ul class="list-inline banner-social-buttons">
                <li id="inline"><a href="https://github.com/walthamstowbob" target="_blank" class="btn btn-default btn-lg"><span class="fa fa-github" aria-hidden="true"></span></a></li>
                <li id="inline"><a href="https://jsfiddle.net/user/walthamstowbob" target="_blank" class="btn btn-default btn-lg"><span class="fa fa-jsfiddle" aria-hidden="true"></span></a></li>
                <li id="inline"><a href="mailto:barry@lekkerit.com" class="btn btn-default btn-lg"><span class="glyphicon glyphicon-envelope" aria-hidden="true"></span></a></li>
                <li id="inline"><a href="https://twitter.com/lekkerit_" target="_blank" class="btn btn-default btn-lg"><span class="fa fa-twitter" aria-hidden="true"></span></a></li>
                <li id="inline"><a href="https://nl.linkedin.com/in/lekkerbob" target="_blank" class="btn btn-default btn-lg"><span class="fa fa-linkedin" aria-hidden="true"></span></a></li>
                      
            </ul>
            </div>
        </div>
    </div>

    
        `,        
})

export class LekkerFooterComponent  {}