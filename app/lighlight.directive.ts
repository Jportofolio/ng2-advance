

import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
    selector: '[highlight]'
})

export class HighlighDirective {
    constructor(renderer: Renderer, el: ElementRef){
        renderer.setElementStyle(el.nativeElement, 'background', 'gold');
        console.log(
            `* AppRoot highlight called for ${el.nativeElement.tagName}`
        );
    }
}