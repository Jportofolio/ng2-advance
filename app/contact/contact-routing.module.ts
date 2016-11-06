
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './contact.component';

const routeChild = [
    {path: 'contact', component: ContactComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routeChild)],
    exports: [RouterModule]
})
export class ContactRoutingModule {}
