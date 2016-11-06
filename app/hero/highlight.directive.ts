
import {Directive, ElementRef, Renderer } from '@angular/core';

//Same directive name and selector as
// HighlightDirective in parent AppRootModule
//
@Directive({selector: '[highlight]'})
export class highlightDirective {
    constructor(renderer: Renderer, el: ElementRef){
        renderer.setElementStyle(el.nativeElement, 'background', 'beige');
        console.log(`* Hero highlight called for ${el.nativeElement.tagName}`);
    }
}