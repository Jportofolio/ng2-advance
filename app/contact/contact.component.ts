
import { Component, OnInit }  from '@angular/core';

import { Contact, ContactService } from './contact.service';
import { UserService } from '../user.service';

@Component({
    moduleId: module.id,
    selector: 'app-contact',
    templateUrl: 'contact.component.html',
    styleUrls: ['contact.component.css']
})

export class ContactComponent implements OnInit {
   
    contact: Contact;
    contacts: Contact[];

    msg = 'Loading contacts ...';
    UserName=  '';

    constructor(private contactService: ContactService, userService: UserService){
     this.UserName = userService.userName;
    }

    ngOnInit(){
       this.contactService.getContacts().then(contacts => {
           this.msg= '';
           this.contacts = contacts;
           this.contact = contacts[0];
       })
    }
    next() {
        let ix = 1 + this.contacts.indexOf(this.contact);
        if (ix >= this.contacts.length) { ix = 0; }
        this.contact  = this.contacts[ix];
    }
    onsubmit(){
        // POST-DEMO TODO: do something like save it
        this.displayMessage('Saved ' + this.contact.name);
    }
    newContact(){
        this.displayMessage('new Contact');
        this.contact = { id: 44, name: ''};
        this.contacts.push(this.contact);
    }

    // Displaying message briefly, then remove it

    displayMessage(msg: string){
        this.msg = msg;
        setTimeout(() => this.msg = '', 1500);
    }
}

