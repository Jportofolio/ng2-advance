
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

import { CommonModule } from '@angular/common';
import {TitleComponent } from './title.component';
import { SharedModule } from '../shared/shared.module';
import { UserService, UserServiceConfig } from './user.service';

@NgModule({
    imports: [ CommonModule, SharedModule ],
    declarations:  [ TitleComponent ],
    exports: [TitleComponent],
    providers: [UserService]
})
export class CoreModule { 

    constructor(@Optional() @SkipSelf() parentModule: CoreModule){
        if (parentModule){
            throw new Error (
                'CoreModule is already loaded. Import it in the AppModule Only'
            );
        }

    }
    static forRoot(config: UserServiceConfig): ModuleWithProviders {
       return {
        ngModule: CoreModule,
        providers: [
            {   provide: UserServiceConfig, 
               useValue: config
            }
          ]
       };
    }
}