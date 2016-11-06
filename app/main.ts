// The Browser platform with a compiler

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


// the app module
import { AppModule } from './app.module';

// compile and Launch the module
platformBrowserDynamic().bootstrapModule(AppModule)