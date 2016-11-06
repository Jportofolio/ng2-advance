
import {NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// Shared Module replace CommonModule and others common feature
import { SharedModule } from '../shared/shared.module';

import { HeroComponent } from './hero.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroListComponent } from './hero-list.component';
import { highlightDirective } from './highlight.directive';
import { HeroRoutingModule } from './hero.routing.module';

@NgModule({
    imports: [SharedModule, HeroRoutingModule ],
    declarations: [
        HeroComponent, HeroDetailComponent, HeroListComponent,
        highlightDirective
    ]
})
export class HeroModule {}