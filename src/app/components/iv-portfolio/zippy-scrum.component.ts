import {Component, Input} from 'angular2/core';

@Component({
    selector: 'zippy',
    template: `
    
    <div class="col-md-3">
    <div class="zippy">
        <div
            class="zippy-heading"
            (click)="toggle()">    
            {{ heading }}
        <i 
            class="pull-right glyphicon"
            [ngClass]="
                {
                    'glyphicon-chevron-down': !isExpanded,
                    'glyphicon-chevron-up': !isExpanded
                }">
        </i>
        </div>
        <div *ngIf="isExpanded" class="zippy-content">

        <div class="media">
        <div class="media-middle">
            <iframe 
                class="media-object" width="600" height="325" src="https://www.youtube.com/embed/CRWaXYWFY_k" frameborder="0" allowfullscreen>
            </iframe>
            <a href="http://nrmm.london" target="_blank" class="btn btn-primary" id="nrmm">NRMM Database</a>
        </div>
        </div>
        <ng-content></ng-content>
        </div>
        </div>
        </div>

        `,        
})

export class ZippyComponent  { 
   
   isExpanded = true;

   @Input() heading: string;

    toggle(){
        this.isExpanded = !this.isExpanded;
    }
}