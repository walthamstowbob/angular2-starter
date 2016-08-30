import {Component, Input} from '@angular/core';

@Component({
    selector: 'zippy-folio',
    // templateUrl:'src/app/components/iv-portfolio/zippy-folio.component.ts',
    styleUrls:['src/app/components/iv-portfolio/zippy-folio.component.css'],  
})

export class ZippyFolioComponent  { 
   
   isExpanded = false;

   @Input() heading: string;

    toggle(){
        this.isExpanded = !this.isExpanded;
    }
}