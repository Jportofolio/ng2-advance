
import { NgModule } from '@angular/core';  // this is the root Module
import { BrowserModule } from '@angular/platform-browser';

/* App Root */
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
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
        AppRoutingModule,
        SharedModule
        ],
    declarations: [
        AppComponent,
        TitleComponent,
    ],
    providers: [ UserService],
    bootstrap:  [AppComponent]
})

export class AppModule {}
