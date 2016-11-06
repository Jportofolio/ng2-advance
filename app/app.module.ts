
import { NgModule } from '@angular/core';  // this is the root Module
import { BrowserModule } from '@angular/platform-browser';

/* App Root */
import { AppComponent } from './app.component';


/** Feature Modules */
import { ContactModule } from './contact/contact.module';
import { CoreModule } from './core/core.module';


/** Routing Module */
import { AppRoutingModule } from './app.routing.module';


@NgModule({
    imports: [
        BrowserModule, 
        ContactModule,
        CoreModule.forRoot({userName: 'Mr. Success'}),
        AppRoutingModule,
        ],
    declarations: [AppComponent],
    bootstrap:  [AppComponent]
})

export class AppModule {}
