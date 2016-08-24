import {Component, Input} from '@angular/core';

@Component({
    selector: 'zippy-boot',
    templateUrl:'src/app/components/iv-portfolio/zippy-boot.component.ts',
    styleUrls:['src/app/components/iv-portfolio/zippy-boot.component.css'],       
})

export class ZippyBootComponent  { 
   
   isExpanded = true;

   @Input() heading: string;

    toggle(){
        this.isExpanded = !this.isExpanded;
    }
}