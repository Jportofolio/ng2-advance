
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Imports the ChildRouter module */
import { ContactRoutingModule } from './contact-routing.module';

import { FormsModule } from '@angular/forms';
import { AwesomePipe } from './awesome.pipe';

import { ContactComponent }  from './contact.component';
import { ContactService } from './contact.service';

import { SharedModule } from '../shared/shared.module'; // module that import Awsome pipe and highlight

@NgModule({
    imports :     [ CommonModule, FormsModule, ContactRoutingModule, SharedModule ],
    declarations: [ ContactComponent],
    // exports:      [ ContactComponent],
    providers:    [ ContactService]
})
export class ContactModule { }

