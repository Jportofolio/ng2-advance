
import { NgModule } from '@angular/core';  // this is the root Module
import { BrowserModule } from '@angular/platform-browser';

/* App Root */
import { AppComponent } from './app.component';
import { HighlighDirective } from './lighlight.directive';
import { UserService } from './user.service';
import {TitleComponent } from './title.component';

/** Feature Modules */
import { ContactModule } from './contact/contact.module';

/** Routing Module */
import { AppRoutingModule } from './app.routing.module';


@NgModule({
    imports: [
        BrowserModule, 
        ContactModule,
        AppRoutingModule
        ],
    declarations: [
        AppComponent,
        HighlighDirective,
        TitleComponent,
    ],
    providers: [ UserService],
    bootstrap:  [AppComponent]
})

export class AppModule {}
